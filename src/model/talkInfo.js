
const talkInfo = {
  namespace: "talkInfo",
  state: {
    socketId: null,
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
    *init({ talkInfo }, { put, select }) {
      yield put({
        type: "set",
        payload: talkInfo
      });
    }
  }
};

export default talkInfo;
