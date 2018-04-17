import api from "../api";
import { get, post } from '../utils/request'
import { routerRedux } from 'dva/router';

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
      const { loading } = yield select(state => state);
      const { username, password } = value;
      const result = yield call(register, { username, password });
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
    },
  },
  subscriptions: {
  }
};

async function register(value) {
  console.log(value)
  const result = await post(`${api.url}/api/v1/session`, value)
  return result
}
export default userInfo;
