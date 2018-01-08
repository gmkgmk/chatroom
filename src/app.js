/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:37 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-01-07 22:17:15
 */
import React from "react";
import MainLayou from "./layout";

class SocketComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      userInfo: null,
      messageList: [],
      userList: []
    };
  }

  createUser(event) {
    const { userInfo, messageList, userList } = this.state;
    let message = JSON.parse(event.data);

    const { type } = message;
    switch (type) {
      case "userInfo":
        if (!userInfo) {
          this.setState({
            userInfo: message.person
          });
        }
        break;
      case "mes":
        messageList.push(message);
        this.setState({
          messageList
        });
        break;
      case "userlist":
        const { personList } = message;
        this.setState({
          userList:personList
        });
        break;
      default:
        throw Error("参数错误");
    }
    message = null;
  }

  componentDidMount() {
    const socket = new WebSocket("ws://localhost:8080");
    if (socket.readyState === 0) {
      socket.onmessage = this.createUser.bind(this);
    }
    this.state.socket = socket;
  }
  render() {
    return <MainLayou init={this.state} />;
  }
}

export default SocketComponent;
