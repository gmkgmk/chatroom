// import { listen } from '../services/socket';

const userInfo = {
  namespace: "userInfo",
  state: {
    name: "暂未登陆",
    key: "",
    avatar: null,
    friends: [],
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
    *init({ payload }, { put }) {
      yield put({
        type: "set",
        payload,
      });
    },
  },
  subscriptions: {
    socket({ dispatch }) {
      // console.log(listen)
      // listen
      // const socket = window._socket;
      // socket.on("userInfo", data => {
      //   dispatch({
      //     type: "init",
      //     payload: data
      //   });
      // })
    }
  }
};

export default userInfo;
