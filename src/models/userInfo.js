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
    },
    setFriend(state, { payload }) {
      const friendList = payload;
      const result = { ...state, friendList };
      console.log(result)
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
    *friendDisconnect(payload, { put, select }) {
      const { userInfo } = yield select(state => state);
      // console.log(userInfo)
      // console.log(payload)
      // yield put({
      //   type: "set",
      //   payload,
      // });
    },
    *friendConnect({ payload: { data = {} } }, { put, select }) {
      const { userInfo } = yield select(state => state);
      const { friendList } = userInfo;
      const friend = data.payload.friend;
      const friendIndex = friendList.findIndex((item) => {
        return item.pid === friend.pid;
      })
      // 如果不等于-1
      console.log(!!~friendIndex)
      if (!!~friendIndex) {
        friendList[friendIndex] = friend;
        yield put({
          type: "setFriend",
          payload: friendList,
        });
      }
    }
  },
  subscriptions: {
    socket({ dispatch }) {
      listen("friendConnect", data => {
        dispatch({
          type: "friendConnect",
          payload: data
        });
      })
      listen("userInfo", data => {
        dispatch({
          type: "init",
          payload: data
        });
      })

      listen("friendDisconnect", data => {
        console.log(data)
        dispatch({
          type: "friendDisconnect",
          payload: data
        });
      })
    }
  }
};

export default userInfo;
