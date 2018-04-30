import React, { Component } from "react";
import "./style.css";

class SiderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search_bar">
        <i className="web_wechat_search" />
        <input className="frm_search" placeholder="搜索" type="text" />
      </div>
    );
  }
}

export default SiderSearch;
