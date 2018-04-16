import React from "react";
import { Layout, Avatar } from "antd";
import { connect } from 'dva';
const { Header } = Layout;
import "./style.css";

const HeaderComponent = ({ name, avatar }) => {
  return (
    <Header id="header">
      <div className="userInfo">
        {name}
        {avatar ? <Avatar src={avatar} /> : <Avatar icon="user" />}
      </div>
    </Header>
  )
}

const mapStateToProps = ({ userInfo, chat }) => {
  return chat || userInfo || {}
}
export default connect(mapStateToProps)(HeaderComponent);
