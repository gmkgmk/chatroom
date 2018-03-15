import React from "react";
import Chat from './chat';
import { Layout } from "antd";

import Register from '../pages/register';
import { connect } from 'dva';
import { Switch, Route,Redirect } from 'dva/router';
import "./index.css";
class LayoutComponent extends React.Component {
  render() {
    return (
      <section className="layoutBg">
        <Layout className="main">
          <Switch>
            <Route exact path='/chat' component={Chat} />
            <Route path='/register' component={Register} />
            <Redirect to="/register" /> 
          </Switch>
        </Layout>
      </section>
    );
  }
}


export default LayoutComponent;