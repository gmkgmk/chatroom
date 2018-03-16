import api from "../api";
import { post } from '../fetch';
import { routerRedux } from 'dva/router';
import { select } from 'redux-saga/effects'
function* aa() {
  const { user: state } = yield select(state => state);
  debugger;
};

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
    *register({ }, { put, select, call }) {
      const { user: state, loading } = yield select(state => state);
      const result = yield call(register, state);
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
    *signout({},{ call }) {
      const result = yield call(signout);
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
  const result = await post(`${api.url}/api/v1/session/all`, {}, 'DELETE')
  return result
}

export default user;
