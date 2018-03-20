import api from "../api";
import { get } from '../fetch'
import { routerRedux } from 'dva/router';

const userInfo = {
  namespace: "userInfo",
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
    *init({ userInfo }, { put }) {
      if (!userInfo||!userInfo.pid) {
        yield put(routerRedux.push({
          pathname: '/register'
        }));
      }
      yield put({
        type: "set",
        payload: userInfo
      });
    }
  },
  subscriptions: {
  }
};
async function register() {
  const result = await get(`${api.url}/api/v1/session`);
  return result
}
export default userInfo;
