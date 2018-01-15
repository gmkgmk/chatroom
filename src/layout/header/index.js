import React from "react";
import { Layout, Avatar } from "antd";
import { connect } from 'dva';
const { Header } = Layout;
import "./style.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name,avatar } = this.props;

    return (
      <Header id="header">
        <div className="userInfo">
          欢迎你:{name}
          {avatar ? <Avatar src={avatar} /> : <Avatar icon="user" />}
        </div>
      </Header>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return user || {}
}
export default connect(mapStateToProps)(HeaderComponent);
