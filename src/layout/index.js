import React from "react";
import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import "./index.css";

class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { init } = this.props;
    return (
      <div className="layoutBg">
        <Layout className="layout">
          <Header {...init} />
          <Content {...init} />
          <Footer {...init} />
        </Layout>
      </div>
    );
  }
}

export default LayoutComponent;
