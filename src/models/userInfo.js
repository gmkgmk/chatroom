import { routerRedux } from 'dva/router';
import { register } from '../services';

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
    *init({ userInfo }, { put }) {
      if (!userInfo || !userInfo.pid) {
        yield put(routerRedux.push({
          pathname: '/register'
        }));
      }
      yield put({
        type: "set",
        payload: userInfo
      });
    },
    *register({ payload: value }, { put, select, call }) {
      const { username, password } = value;
      const result = yield call(register, { username, password });
      yield checkRegister(result, { put, select, call })
    },
  },
  subscriptions: {
  }
};


function* checkRegister(result, { put, select, call }) {
  if (result.code == 200) {
    yield put({
      type: "util/success",
      message: "登陆成功"
    });

    yield new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
    yield put(routerRedux.push({
      pathname: '/chat'
    }));
  } else {
    yield put({
      type: "util/fail",
      message: "登录失败:" + result.data.message
    });
  }
}
export default userInfo;
