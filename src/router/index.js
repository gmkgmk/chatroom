import { Layout } from "antd";
import { Switch, Route, Redirect, routerRedux } from 'dva/router';
import "./index.css";
import { getRouterData } from './routerData';
import dynamic from 'dva/dynamic';
import Spin from '../components/Spin'
const { ConnectedRouter } = routerRedux;

dynamic.setDefaultLoadingComponent(() => {
  return <Spin />
});

const RouteConfig = ({ app }) => {
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

export default ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <RouteConfig app={app} />
    </ConnectedRouter>
  )
}
