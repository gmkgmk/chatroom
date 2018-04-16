/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:37 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-04-16 21:49:04
 */
import React from "react";
import Routes from "./routes";
import { routerRedux } from 'dva/router';
const { ConnectedRouter } = routerRedux;


const App = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};

export default App;
