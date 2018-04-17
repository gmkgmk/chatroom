import React from "react";
import { Layout } from "antd";
import { connect } from 'dva';
import { Switch, Route, Redirect, routerRedux } from 'dva/router';
import "./index.css";
import Chat from '../pages/chat';
import Spin from '../components/Spin'
import Register from '../pages/register';
import HOCLoading from '../HOC/loading';

const { ConnectedRouter } = routerRedux;

const routes = () => {
  return (
    <main className="layoutBg">
      <Layout className="main">
        <Switch>
          <Route exact path='/chat' component={Chat} />
          <Route path='/register' component={Register} />
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
export default () => {
  return (
    <ConnectedRouter history={window._history}>
      <ConnectWithRoute />
    </ConnectedRouter>
  )
}
