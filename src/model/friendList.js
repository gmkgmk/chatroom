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
    },
    put({ friendList }, { payload }) {
      const friendInfo = { ...payload }
      for (let i in friendList) {
        if (friendList[i].pid == friendInfo.pid) {
          friendList[i] = friendInfo
        }
      }
      return { friendList };
    }
  },
  effects: {
    *init({ friendList }, { put, select }) {
      yield put({
        type: "set",
        payload: friendList
      });
    },
    *update({ payload: { friend } }, { put, select }) {
      yield put({
        type: "put",
        payload: friend
      });
    }
  }
};

export default friendList;
