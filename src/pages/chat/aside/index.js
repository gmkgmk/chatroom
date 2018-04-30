import React, { Component } from "react";
import { Layout } from "antd";

import "./style.css";
import SideHeader from "./Header";
import SideSearch from "./Search";
import SideList from ".//List";
const { Sider } = Layout;

class SideComponent extends Component {
  render() {
    return (<Sider width={280} className="chatAside">
      <SideHeader />
      <SideSearch />
      <SideList />
    </Sider>)
  }
}
export default SideComponent;
