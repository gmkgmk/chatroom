import { emitSend, listen } from '../services/socket';

const message = {

  namespace: "message",
  state: {
    messageList: [],
    messageUser: {}
  },
  reducers: {
    set(state, { payload }) {
      let result = {
        ...state,
        ...payload
      };
      return result;
    },
    update(state, { payload: { message, person } }) {
      const messageList = [...state.messageList, message];
      const messageUser = person || state.messageUser;
      let result = {
        messageList,
        messageUser
      };
      return result;
    }
  },
  effects: {
    *init({ message }, { put, select }) {
      const { message: { messageList } } = yield select(state => state);
      messageList.push(message);
      yield put({
        type: "set",
        payload: { messageList }
      });
    },
    *send({ payload }, { put, select }) {
      const { socket: { io }, userInfo } = yield select(state => state);
      io.emit("message", {
        message: payload,
        person: userInfo
      });
    },
    *reset(messageList, { put, select }) {
      yield put({
        type: "set",
        payload: messageList
      });
    },
    *privateChannel({ payload: { message } }, { put, select }) {
      const { userInfo, chat: { pid } } = yield select(state => state);
      emitSend("privateChannel", {
        pid,
        message,
        person: userInfo
      })

    },
    *privateSelf({ payload: { message } }, { put, select }) {
      // 自己发的就用自己的userPid加入数组
      const { userInfo } = yield select(state => state);
      const payload = {
        message: {
          data: message,
          pid: userInfo.pid
        },
        person: userInfo
      }
      yield put({
        type: "setMessage",
        payload,
      });
    },
    *getMessage({ payload: { data: { payload } } }, { put }) {
      yield put({
        type: "setMessage",
        payload
      });
    },
    *setMessage({ payload }, { put }) {
      yield put({
        type: "update",
        payload
      });
    }
  },
  subscriptions: {
    socket({ dispatch }) {
      listen("server:privateChannel", data => {
        dispatch({
          type: "getMessage",
          payload: data
        })
      })
    }
  }
};

export default message;
