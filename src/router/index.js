import React from "react";
import { Layout } from "antd";
import { connect } from 'dva';
import { Switch, Route, Redirect, routerRedux } from 'dva/router';
import "./index.css";
import Chat from '../pages/chat';
import Spin from '../pages/Spin'
import Register from '../pages/register';

const { ConnectedRouter } = routerRedux;

const routes = ({ global: loading }) => {
  return (
    <main className="layoutBg">
      <Layout className="main">
        {loading ? <Spin /> :
          <Switch>
            <Route exact path='/chat' component={Chat} />
            <Route path='/register' component={Register} />
            <Redirect to="/register" />
          </Switch>}
      </Layout>
    </main>
  );
}


const mapStateToProps = ({ loading }) => {
  return loading || {}
}

const ConnectWithRoute = connect(mapStateToProps)(routes)
export default () => {
  return (
    <ConnectedRouter history={window._history}>
      <ConnectWithRoute />
    </ConnectedRouter>
  )
}
