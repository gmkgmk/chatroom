/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 22:16:01 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-02-23 18:29:03
 */
import api from "../api";
import io from "socket.io-client";

const socket = {
  namespace: "socket",
  state: {
    io :null
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
    *init({socket} , { put }) {
      const io = socket
      yield put({
        type: "set",
        payload: {io}
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
    },
    *initMessage({ message }, { call, put, select }) {
      yield put({
        type: "message/init",
        message
      });
    }
  },
  subscriptions: {
    init({ dispatch }) {
      let socket
      try {
        socket = io(api.url);
      } catch (error) {
        console.log(error)
      }
      
      if (!socket) return
      console.log(socket)
      socket.on("res", data => {
        console.log("data",data)
       });
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
        console.log(data)
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
    }
  }
};

export default socket;
