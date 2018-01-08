import React, { Component } from "react";
import "./style.css";
import List from "./List";
class SiderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userList } = this.props;
    let renderList = null;
    if (userList) {
      renderList = userList.map((item, idx) => {
        return <List item={item} key={idx} />;
      });
    }
    return <section>{renderList}</section>;
  }
}

export default SiderList;
