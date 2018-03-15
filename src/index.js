import React from "react";
import dva from "dva";
import { message } from "antd";
import Root from "./root";
import createHistory from "history/createBrowserHistory";
import socket from "./model/socket";
import userInfo from "./model/userInfo";
import userList from "./model/userList";
import messageModel from "./model/message";
import user from "./model/user";

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  }
});

app.model(user);
app.model(userInfo);
app.model(userList);
app.model(messageModel);
app.model(socket);
app.router((app) => <Root {...app} />);
app.start("#app");
