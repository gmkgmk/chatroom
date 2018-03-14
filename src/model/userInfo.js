import api from "../api";

const user = {
  namespace: "user",
  state: {
    name: "暂未登陆",
    key: "",
    avatar: null,
    friendList: [],
    time: ""
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
    * init({ userInfo }, { put, select }) {
      const {user} =userInfo;
      yield put({
        type: "set",
        payload:user
      });
    }
  },
  subscriptions: {
  }
};

export default user;
