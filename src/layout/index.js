import React from "react";
import Chat from './chat';
import { Layout } from "antd";

import Register from '../pages/register';
import { connect } from 'dva';
import { Switch, Route, Redirect } from 'dva/router';
import Spin from '../pages/Spin'
import "./index.css";
const LayoutComponent=(props)=> {
    const { global:loading } =props;
    return (
      <section className="layoutBg">
        <Layout className="main">
          {loading ? <Spin /> :
            <Switch>
              <Route exact path='/chat' component={Chat} />
              <Route path='/register' component={Register} />
              <Redirect to="/register" />
            </Switch>}
        </Layout>
      </section>
    );
}

const mapStateToProps = ({ loading }) => {
  return loading || {}
}
export default connect(mapStateToProps)(LayoutComponent);