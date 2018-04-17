// /*
//  * @Author: guo.mk 
//  * @Date: 2017-12-19 17:22:37 
//  * @Last Modified by: guo.mk
//  * @Last Modified time: 2018-04-17 11:25:45
//  */
// import React from "react";
// import Routes from "./router";
// import { routerRedux } from 'dva/router';
// const { ConnectedRouter } = routerRedux;

// // create history
// const history = window.history;

// const App = () => {
//   return (

//   );
// };

// export default App;
import React, { Component } from "react";
import ReactDOM from 'react-dom';

import dva from "dva";
import createLoading from 'dva-loading';

import socketModel from "./models/socket";
import userInfoModel from "./models/userInfo";
import chatModel from "./models/chat";
import friendsModel from "./models/friends";
import messageModel from "./models/messages";
import utilModel from "./models/util";

import onError from './plugins/onError'

const app = dva({
  history: window._history
});

app.use(createLoading());
app.use(onError);
app.model(utilModel);
app.model(userInfoModel);
app.model(friendsModel);
app.model(messageModel);
app.model(socketModel);
app.model(chatModel);


class WebsocketApp extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default WebsocketApp