import api from "../api";

const userList = {
  namespace: "userList",
  state: {
    userList: []
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
    *init({ userList }, { put, select }) {
      yield put({
        type: "set",
        payload: {userList}
      });
    }
  }
};

export default userList;
