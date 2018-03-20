import React from "react";
import dva from "dva";
import { message } from "antd";
import Root from "./root";
import createHistory from "history/createBrowserHistory";
import socket from "./model/socket";
import userInfo from "./model/userInfo";
import talkInfo from "./model/talkInfo";
import friendList from "./model/friendList";
import messageModel from "./model/message";
import util from "./model/util";
import user from "./model/user";
import createLoading from 'dva-loading';

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  }
});
app.use(createLoading());
app.model(user);
app.model(util);
app.model(userInfo);
app.model(friendList);
app.model(messageModel);
app.model(socket);
app.model(talkInfo);
app.router((app) => <Root {...app} />);
app.start("#app");
