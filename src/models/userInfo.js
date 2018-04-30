import { listen } from '../services/socket';

const userInfo = {
  namespace: "userInfo",
  state: {
    name: "暂未登陆",
    key: "",
    avatar: "",
    time: "",
    pid: "",
    numberId: null,
    username: "",
    email: "",
    phone: "",
    website: "",
    password: "",
    updateTime: "",
    regTime: "",
    friendsList: "",
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
    *init({ payload = {} }, { put }) {
      const { data: { payload: { userInfo } } } = payload;
      yield put({
        type: "set",
        payload: userInfo
      });
    },
  },
  subscriptions: {
    socket({ dispatch }) {
      listen("userInfo", data => {
        dispatch({
          type: "init",
          payload: data
        });
      })
    }
  }
};

export default userInfo;
