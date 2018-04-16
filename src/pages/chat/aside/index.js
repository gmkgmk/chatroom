import React, { Component } from "react";
import { Layout } from "antd";
const { Sider } = Layout;
import { connect } from 'dva';

import "./style.css";
import SiderHeader from "./components/Header";
import SiderSearch from "./components/Search";
import SiderList from "./components//List";

const friends = (friends) => {
  const friendsList = friends.map((item, idx) => {
    return (
      <article data-id={item.key} className={`chat_item`} key={idx}>
        <div className="avatar">
          <img src={item.avatar} className="img" />
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

const SiderComponent = ({ friends, userInfo }) => {
  return (
    <Sider width={280} id="aside">
      <SiderHeader />
      <SiderSearch />
      <SiderList />
    </Sider>
  );
}

export default connect()(SiderComponent);
