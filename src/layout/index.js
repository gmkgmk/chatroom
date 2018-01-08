import React from "react";
import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";
import Aside from "./aside";
import Content from "./content";
import "./index.css";
class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { init } = this.props;
    return (
      <section className="layoutBg">
        <Layout className="main">
          {init ? <Aside {...init} /> : null}
          <Layout className="layout">
            <Header {...init} />
            <Content {...init} />
            <Footer {...init} />
          </Layout>
        </Layout>
      </section>
    );
  }
}

export default LayoutComponent;
