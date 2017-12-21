import React from "react";
import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { init } = this.props;
    return (
      <Layout className="layout">
        <Header {...init} />
        <Content {...init} />
        <Footer {...init} />
      </Layout>
    );
  }
}

export default LayoutComponent;
