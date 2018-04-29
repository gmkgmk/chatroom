/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:37 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-04-28 18:25:12
 */

import { Component } from "react";

import dva from "dva";
import createLoading from 'dva-loading';

// import loginModel from './models/login';
// import socketModel from "./models/socket";
// import userInfoModel from "./models/userInfo";
// import chatModel from "./models/chat";
// import friendsModel from "./models/friends";
// import messageModel from "./models/messages";
// import utilModel from "./models/util";


import onError from './plugins/onError'



const app = dva({
  history: window._history,
});

app.use(createLoading());
app.use(onError);
// app.model(utilModel);
// app.model(userInfoModel);
// app.model(friendsModel);
// app.model(messageModel);
// app.model(socketModel);
// app.model(chatModel);
// app.model(loginModel);

class WebsocketApp extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export {
  app,
  WebsocketApp
}