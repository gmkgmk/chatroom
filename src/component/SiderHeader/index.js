import React, { Component } from "react";
import "./style.css";
import SiderItems from "../SiderItems";

const SiderHeader = SiderItems => item => {
  return <header className={`asideHead `}>{SiderItems(item, { nameClass: `display_name` })}</header>;
};
const WithSiderHeader = SiderHeader(SiderItems);
export default WithSiderHeader;
