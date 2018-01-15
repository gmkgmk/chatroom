/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 22:16:01 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-01-15 21:13:31
 */
import api from "../api";
import io from "socket.io-client";

const socket = {
  namespace: "socket",
  state: {
    socket: null
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
    *init({ }, { put }) {
      yield put({
        type: "set",
        payload: socket
      });
    },
    *initUser({ userInfo }, { call, put, select }) {
      yield put({
        type: "user/init",
        userInfo
      });
    },
    *initUserList({ userList }, { call, put, select }) {
      yield put({
        type: "userList/init",
        userList
      });
    }
  },
  subscriptions: {
    init({ dispatch }) {
      // dispatch({
      //   type: "init"
      // });
      let socket
      try {
        socket = io(api.url);
      } catch (error) {
        console.log(error)
      }
      if (!socket) return
      socket.once("userInfo", data => {
        dispatch({
          type: "initUser",
          userInfo: data
        });
      });
      socket.on("userList", data => {
        dispatch({
          type: "initUserList",
          userList: data
        });
      });
      socket.on("server:message", data => {

      });
    }
  }
};

export default socket;
