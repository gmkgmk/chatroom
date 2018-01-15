import React, { Component } from "react";
import "./style.css";
import SiderItems from "../SiderItems";
import { connect } from 'dva';

const SiderHeader = SiderItems => item => {
  return <header className={`asideHead `}>{SiderItems(item, { nameClass: `display_name` })}</header>;
};


const mapStateToProps = ({ user }) => {
  const userInfo = user;
  return userInfo || {}
}

const WithSiderHeader = SiderHeader(SiderItems);
export default connect(mapStateToProps)(WithSiderHeader);
