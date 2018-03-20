import api from "../api";

const friendList = {
  namespace: "friendList",
  state: {
    friendList: []
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
    *init({ friendList }, { put, select }) {
      console.log(friendList)
      yield put({
        type: "set",
        payload:  friendList 
      });
    }
  }
};

export default friendList;
