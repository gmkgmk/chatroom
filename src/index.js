import React from "react";
import dva from "dva";
import { message } from "antd";
import Root from "./root";
import createHistory from "history/createBrowserHistory";
import socket from "./model/socket";
import userInfo from "./model/userInfo";
import userList from "./model/userList";

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  }
});

app.model(userInfo);
app.model(userList);
app.model(socket);
app.router(() => <Root  />);
app.start("#app");
