/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 22:16:01 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-04-28 16:41:23
 */
import { connect } from '../services/socket';
const namespace = "chat/socket";
const socket = {
  namespace,
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
    *inifriends(friends, { call, put, select }) {
      yield put({
        type: "friends/init",
        friends
      });
    },
    *updatefriends(payload, { put }) {
      yield put({
        type: "friends/update",
        payload
      });
    },
    *initMessage({ message }, { call, put, select }) {
      yield put({
        type: "message/init",
        message
      });
    },
  },
  subscriptions: {
    socket({ history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/room/chat') {
          connect()
        }
      })
    }
    // init({ dispatch, history }) {
    //   history.listen(({ pathname }) => {
    //     if (pathname === '/room/register') { };
    //     if (pathname !== '/room/chat') return;
    //   })
    //   //   let socket
    //   //   try {
    //   //     socket = io(api.url);
    //   //   } catch (error) {
    //   //     console.log(error)
    //   //   }

    //   //   if (!socket) return

    //   //   socket.on("server:private_chat", data => {
    //   //     dispatch({
    //   //       type: "initMessage",
    //   //       message: data
    //   //     });
    //   //   });


    //   //   socket.on("server:updateFriend", data => {
    //   //     dispatch({
    //   //       type: "updatefriends",
    //   //       friend: data
    //   //     });
    //   //   });
    //   //   socket.on("server:message", data => {
    //   //     dispatch({
    //   //       type: "initMessage",
    //   //       message: data
    //   //     });
    //   //   });
    //   //   socket.on('connect', () => {
    //   //     dispatch({
    //   //       type: "init",
    //   //       socket
    //   //     });
    //   //   });
    // }
  }
};

export default socket;
