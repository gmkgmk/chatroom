import { listen } from '../services/socket';
import { routerRedux } from 'dva/router';

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
    friendList: [],
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
      if (!userInfo.pid) {
        yield put(routerRedux.push('/register'));
        return
      }
      yield put({
        type: "set",
        payload: userInfo
      });
    },
    *update({ payload = {} }, { put }) {
      yield put({
        type: "set",
        payload,
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
