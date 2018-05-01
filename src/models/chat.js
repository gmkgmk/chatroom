
const chat = {
  namespace: "chat",
  state: {
    name: "",
    avatar: "",
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
    *init(payload, { put, select }) {
      yield put({
        type: "set",
        payload,
      });
    }
  }
};

export default chat;
