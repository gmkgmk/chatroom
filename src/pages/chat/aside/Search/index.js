import React, { Component } from "react";
import "./style.css";

export default class SideSearch extends Component {
  render() {
    return (
      <div className="search_bar">
        <i className="web_wechat_search" />
        <input className="frm_search" placeholder="搜索" type="text" />
      </div>
    );
  }
}

