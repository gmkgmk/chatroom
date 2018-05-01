import { queryAccountLogin, validateAccountLogin } from '../services/login'
import { routerRedux } from 'dva/router';
import checkStatus from '../utils/checkStatus';

export default {
  namespace: 'login',
  state: {
    status: undefined,// 0成功,1失败;
    message: '用户名或密码错误',
  },
  effects: {
    *register({ payload, callback }, { put, select, call }) {
      const { username, password } = payload;
      const result = yield call(queryAccountLogin, { username, password });
      const status = result && result.success ? 0 : 1;
      const message = result && result.data.message;
      yield checkStatus(result, "登录成功")
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status,
          type: 'account',
          message,
        },
      });
      if (0 === status) {
        yield put(routerRedux.push('/chat'));
      }
    },
    *logout({ payload, callback }, { put, select, call }) { },
    *validateSession(state, { call, put }) {
      const { code } = yield call(validateAccountLogin);

      if (code === 200) {
        yield put(routerRedux.push('/chat'));
      }
    }
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },

  },
  subscriptions: {
    validateSession({ history, dispatch }) {
      if (history.location.pathname === '/register') {
        dispatch({
          type: 'validateSession',
        })
      }
    }
  }
}