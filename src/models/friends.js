import api from "../api";

const friends = {
  namespace: "friends",
  state: {
    friends: []
  },
  reducers: {
    set(state, { payload }) {
      let result = {
        ...state,
        ...payload
      };
      return result;
    },
    put({ friends }, { payload }) {
      const friendInfo = { ...payload }
      for (let i in friends) {
        if (friends[i].pid == friendInfo.pid) {
          friends[i] = friendInfo
        }
      }
      return { friends };
    }
  },
  effects: {
    *init({ friends }, { put, select }) {
      yield put({
        type: "set",
        payload: friends
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

export default friends;
