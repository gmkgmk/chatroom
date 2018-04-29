import React from "react";
import "./style.css";
import SiderItems from "./../ListItem";

import { connect } from 'dva';

const SiderHeader = SiderItems => item => {
  return <header className={`asideHead `}>{SiderItems(item, { nameClass: `display_name` })}</header>;
};

const mapStateToProps = ({ userInfo }) => {
  return userInfo || {}
}

const WithSiderHeader = SiderHeader(SiderItems);
export default connect(mapStateToProps)(WithSiderHeader);
// export default () => {
//   return (<div>2</div>)
// }