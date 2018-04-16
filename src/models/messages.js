const message = {
  namespace: "message",
  state: {
    messageList: []
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
    *privateChat({ payload: { message } }, { put, select }) {
      const { socket: { io }, userInfo, chat: { clientId } } = yield select(state => state);
      io.emit("privateChat", {
        toId: clientId,
        message,
        person: userInfo
      });
    },
    *msgBySelf({ payload: { message } }, { put, select }) {
      const { message: { messageList }, userInfo } = yield select(state => state);
      messageList.push({
        message,
        person: userInfo
      });
        yield put({
          type: "set",
          payload:messageList
        });
    },
  },
  subscriptions: {}
};

export default message;
