/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:37 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2017-12-20 19:13:45
 */
import React from "react";
import MainLayou from "./layout";

class SocketComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      userInfo: null,
      messageList: []
    };
  }

  createUser(event) {
    const { userInfo } = this.state;
    let message = JSON.parse(event.data);
    if (message.type === "user") {
      if (!userInfo) {
      this.setState({
        userInfo: message
      });
    }
    }
    if (message.type === "mes") {
      const {messageList} = this.state;
      messageList.push(message);
      this.setState({
        messageList
      });
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
