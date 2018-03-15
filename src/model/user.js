import api from "../api";
import { post } from '../fetch';
import { routerRedux } from 'dva/router';
const user = {
  namespace: "user",
  state: {
    username: "",
    password: ""
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
    *changeHandle({ value }, { put }) {
      yield put({
        type: "set",
        payload: value
      });
    },
    *emitEmpty({ valueName }, { put }) {
      yield put({
        type: "set",
        payload: { [valueName]: "" }
      });
    },
    *register({ }, { put, select }) {
      const { user: state } = yield select(state => state);
      const result = yield register(state);
      console.log(result)
      if (result.code == 200) {
        yield put(routerRedux.push({
          pathname: '/chat'
        }));
      }
    },
    *signout(){
      signout()
    }
  },
  subscriptions: {
  }
};
async function register(value) {
  const result = await post(`${api.url}/api/v1/session`, value)
  return result
}
async function signout() {
  const result = await post(`${api.url}/api/v1/session/all`, {},'DELETE')
  return result
}

export default user;
