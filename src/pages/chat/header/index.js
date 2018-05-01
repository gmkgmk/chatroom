import React from "react";
import { Layout, Avatar } from "antd";
import { connect } from 'dva';
import "./style.css";
const { Header } = Layout;

const HeaderComponent = ({ name, avatar }) => {
  return (
    <Header className="chatHeader">
      <div className="userInfo">
        {name}
        {avatar ? <Avatar src={avatar} /> : <Avatar icon="user" />}
      </div>
    </Header>
  )
}

const mapStateToProps = ({ userInfo, chat }) => {
  return chat || {}
}
export default connect(mapStateToProps)(HeaderComponent);
