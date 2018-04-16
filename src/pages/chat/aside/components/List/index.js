import React, { Component } from "react";
import "./style.css";
import List from "./ListItem";
import { connect } from 'dva';


class SiderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { friends:{friends},dispatch,chat } = this.props;
    debugger
    let renderList = [];
    if (friends.length > 0) {
      renderList = friends.map((item, idx) => {
        return List(item, idx,dispatch,chat)
      })
    }
    return <section className={`siderList`}>{renderList}</section>;
  }
}
const mapStateToProps = ({ friends,chat }) => {
  return {friends,chat} || []
}
export default connect(mapStateToProps)(SiderList);
