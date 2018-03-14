import React, { Component } from "react";
import "./style.css";
import List from "./List";
import { connect } from 'dva';


class SiderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userList } = this.props;

    let renderList = [];
    if (userList.length > 0) {
      renderList = userList.map((item, idx) => {
        return List(item, idx)
      })
    }
    return <section className={`siderList`}>{renderList}</section>;
  }
}
const mapStateToProps = ({ userList }) => {
  return userList || []
}
export default connect(mapStateToProps)(SiderList);
