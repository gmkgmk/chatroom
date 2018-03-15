import React from "react";
import { render } from "react-dom";
import { LocaleProvider, Button } from "antd";
import { routerRedux, Route } from 'dva/router';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";
import App from "./app";
const { ConnectedRouter } = routerRedux;

const ROOT = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App />
      </LocaleProvider>
    </ConnectedRouter>
  );
};

export default ROOT;
