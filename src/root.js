import React from "react";
import { render } from "react-dom";
import {  Button } from "antd";
import locale from 'moment/src/locale/zh-cn'
import { routerRedux, Route } from 'dva/router';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import App from "./app";
const { ConnectedRouter } = routerRedux;

const ROOT = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  );
};

export default ROOT;
