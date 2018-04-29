import React, { Component } from "react";
import { Layout } from "antd";

import "./style.css";
import SiderHeader from "./components/Header";
import SiderSearch from "./components/Search";
import SiderList from "./components//List";
const { Sider } = Layout;

// const friends = (friends) => {
const friends = () => {
  const friendsList = friends.map((item, idx) => {
    return (
      <article data-id={item.key} className={`chat_item`} key={idx}>
        <div className="avatar">
          <img src={item.avatar} className="img" alt="图片"/>
        </div>
        <div className={`info`}>
          <h3 className={`nickname`}>
            <span className={`nickname_text`}>{item.name}</span>
          </h3>
        </div>
      </article>
    );
  });
  return friendsList;
}

class SiderComponent extends Component {
  render() {
    return (<Sider width={280} className="chatAside">
      <SiderHeader />
      <SiderSearch />
      <SiderList />
    </Sider>)
  }
}
export default SiderComponent;
