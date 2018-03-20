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
    const { friendList,dispatch } = this.props;

    let renderList = [];
    if (friendList.length > 0) {
      renderList = friendList.map((item, idx) => {
        return List(item, idx,dispatch)
      })
    }
    return <section className={`siderList`}>{renderList}</section>;
  }
}
const mapStateToProps = ({ friendList }) => {
  return friendList || []
}
export default connect(mapStateToProps)(SiderList);
