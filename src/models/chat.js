
const chat = {
  namespace: "chat",
  state: {
    clientId: null,
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
    *init({ chat }, { put, select }) {
      yield put({
        type: "set",
        payload: chat
      });
    }
  }
};

export default chat;
