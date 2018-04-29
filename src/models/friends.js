// import api from "../api";

const friends = {
  namespace: "friends",
  state: {
    friends: []
  },
  reducers: {
    set(state, { payload }) {
      let result = {
        ...state,
        ...payload
      };
      return result;
    },
    put({ friends }, { payload }) {
      const friendInfo = { ...payload }
      for (let i in friends) {
        if (friends[i].pid === friendInfo.pid) {
          friends[i] = friendInfo
        }
      }
      return { friends };
    }
  },
  effects: {
    *init({ payload: friends }, { put, select }) {
      yield put({
        type: "set",
        payload: friends
      });
    },
    *update({ payload: { friend } }, { put, select }) {
      yield put({
        type: "put",
        payload: friend
      });
    }
  },
  subscriptions: {
    socket({ dispatch }) {
      // const socket = window._socket;
      // socket.on("server:friends", data => {
      //   dispatch({
      //     type: "init",
      //     payload: data
      //   });
      // });
      // socket.on("server:updateFriend", data => {
      //   dispatch({
      //     type: "update",
      //     friend: data
      //   });
      // })
    },


  }
};

export default friends;
