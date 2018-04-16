import React from "react";
import dva from "dva";
import { message } from "antd";
import Root from "./app";
import createHistory from "history/createBrowserHistory";
import createLoading from 'dva-loading';

import socketModel from "./models/socket";
import userInfoModel from "./models/userInfo";
import chatModel from "./models/chat";
import friendsModel from "./models/friends";
import messageModel from "./models/messages";
import utilModel from "./models/util";
 
const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  } 
});
app.use(createLoading());
app.model(utilModel);
app.model(userInfoModel);
app.model(friendsModel);
app.model(messageModel);
app.model(socketModel);
app.model(chatModel);
app.router((app) => <Root {...app} />);
app.start("#app");
