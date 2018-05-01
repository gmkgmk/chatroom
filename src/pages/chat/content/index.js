import React from "react";
import { Layout } from "antd";
import "./style.css";
import ContentList from "./List";

const { Content } = Layout;

const ContentComponent = () => {
  return (
    <Content>
      <ContentList />
    </Content>
  )
}

export default ContentComponent;
