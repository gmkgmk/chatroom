const message = {
  namespace: "message",
  state: {
    message: null
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
    *init({ message }, { put }) {
      yield put({
        type: "set",
        payload: { message }
      });
    },
    *send({ payload }, { put, select }) {
      const { socket: { io }, user } = yield select(state => state);
      io.emit("message", {
        message:payload,
        person: user
      });
    }
  }
};

export default message;
