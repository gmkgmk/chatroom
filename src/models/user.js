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
  
    *signout({ }, { call }) {
      const result = yield call(signout);
    }
  },
  subscriptions: {
  }
};

async function signout() {
  const result = await post(`${api.url}/api/v1/session/all`, {}, 'DELETE')
  return result
}

export default user;
