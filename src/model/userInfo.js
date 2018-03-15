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
    *init({ }, { put }) {
      const { data: result, code } = yield register();
      if (200 === code) {
        yield put({
          type: "set",
          payload: result
        });
      } else {
        yield put(routerRedux.push({
          pathname: '/register'
        }));
      }
    }
  },
  subscriptions: {
  }
};
async function register() {
  const result = await get(`${api.url}/api/v1/session`);
  console.log(result)
  return result
}
export default userInfo;
