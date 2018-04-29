import React from "react";
import { Layout } from "antd";
import { connect } from 'dva';
import { Switch, Route, Redirect, routerRedux } from 'dva/router';
import "./index.css";

import HOCLoading from '../HOC/loading';
import { getRouterData } from '../common/router';
import {app} from '../app'

const { ConnectedRouter } = routerRedux;
const routes = () => {
  const routerData = getRouterData(app);
  const ChatPage = routerData['/chat'].component;
  const RegisterPage = routerData['/register'].component;
  return (
    <main className="layoutBg">
      <Layout className="main">
        <Switch>
          <Route path='/register' component={RegisterPage} />
          <Route exact path='/chat' component={ChatPage} />
          <Redirect to="/register" />
        </Switch>
      </Layout>
    </main>
  );
}


const mapStateToProps = ({ loading }) => {
  return loading || {}
}
const LoadingWithRoutes = HOCLoading(routes)
const ConnectWithRoute = connect(mapStateToProps)(({ global: isLoading }) => {
  return <LoadingWithRoutes isLoading={isLoading} />
})
export default (props) => {
  return (
    <ConnectedRouter history={window._history}>
      <ConnectWithRoute />
    </ConnectedRouter>
  )
}
