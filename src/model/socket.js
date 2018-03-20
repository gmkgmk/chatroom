/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 22:16:01 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-03-20 11:46:23
 */
import api from "../api";
import io from "socket.io-client";

const socket = {
  namespace: "socket",
  state: {
    io: null
  },
  reducers: {
    set(state, { payload }) {
      let result = {
        ...state,
        ...payload
      };
      return result;
    }
  },
  effects: {
    *init({ socket }, { put }) {
      const io = socket
      yield put({
        type: "set",
        payload: { io }
      });
    },
    *initUser({ userInfo = {} }, { call, put, select }) {
      yield put({
        type: "userInfo/init",
        userInfo
      });
    },
    *iniFriendList(friendList, { call, put, select }) {
      yield put({
        type: "friendList/init",
        friendList
      });
    },
    *updateFriendList(payload, { put }) {
      yield put({
        type: "friendList/update",
        payload
      });
    },
    *initMessage({ message }, { call, put, select }) {
      yield put({
        type: "message/init",
        message
      });
    },
    // 初始化信息
    *emptyInit({ }, { put }) {
      yield put({
        type: "friendList/init",
        friendList: []
      });
      yield put({
        type: "message/reset",
        message: []
      });
      yield put({
        type: "user/signout"
      });
    }
  },
  subscriptions: {
    init({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/register') {
          dispatch({
            type: "emptyInit"
          });
        };
        if (pathname !== '/chat') return;

        let socket
        try {
          socket = io(api.url);
        } catch (error) {
          console.log(error)
        }

        if (!socket) return

        socket.on("userInfo", data => {
          dispatch({
            type: "initUser",
            userInfo: data
          });
        });
        socket.on("server:private_chat", data => {
          console.log("获取到私聊信息", data)
        });
        socket.on("server:friendList", data => {
          dispatch({
            type: "iniFriendList",
            friendList: data
          });
        });
        socket.on("server:updateFriend", data => {
          console.log("刷新好友列表:", data)
          dispatch({
            type: "updateFriendList",
            friend: data
          });
        });
        socket.on("server:message", data => {
          dispatch({
            type: "initMessage",
            message: data
          });
        });
        socket.on('connect', () => {
          dispatch({
            type: "init",
            socket
          });
        });
      });
    }
  }
};

export default socket;
