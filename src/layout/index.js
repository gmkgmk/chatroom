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
    return (
      <section className="layoutBg">
        <Layout className="main">
          <Aside />
          <Layout className="layout">
            <Header />
            <Content />
            <Footer />
          </Layout>
        </Layout>
      </section>
    );
  }
}

export default LayoutComponent;
