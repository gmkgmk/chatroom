import React from "react";
import { Layout, Avatar } from "antd";
const { Header } = Layout;
import "./style.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userInfo } = this.props;
    let name = "暂未登陆";
    let avatar = null;
    if (userInfo) {
      name = userInfo.name;
      avatar = userInfo.avatar;
    }
    return (
      <Header id="header">
        <div className="logo">在线聊天室:</div>
        <div className="userInfo">
          欢迎你:{name}
          {avatar ? <Avatar src={avatar} />: <Avatar icon="user" /> }
        </div>
      </Header>
    );
  }
}

export default HeaderComponent;
