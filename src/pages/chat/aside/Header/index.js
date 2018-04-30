import React, { PureComponent } from "react";
import "./style.css";
import SideItems from "./../../../../HOC/sideItemHOD";

import { connect } from 'dva';
@connect(({ userInfo }) => {
  return userInfo || {}
})
export default class SideHeader extends PureComponent {
  render() {
    const item = this.props;
    return <header className={`asideHead `}><SideItems item={item} nameClass={'display_name'} /></header>;
  }
}