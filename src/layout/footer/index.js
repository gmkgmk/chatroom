import React from "react";
import { Layout, Input, Button } from "antd";
const { TextArea } = Input;
const { Footer } = Layout;
import "./style.css";

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: null
    };
  }
  updateMsg(e) {
    const value = e.target.value;
    this.setState({
      msg: value
    });
  }
  postAll() {
    const { socket, userInfo } = this.props;
    const { msg } = this.state;
    if (!msg) return;
    socket.emit("client:postAll", {
      msg,
      person:userInfo
    });

    this.setState({
      msg: null
    });
  }
  // postMsg() {
  //   const { socket, userInfo, userID } = this.props;
  //   const { msg } = this.state;
  //   if (!msg) return;

  //   socket.send(
  //     JSON.stringify({
  //       type: "socket:single",
  //       user: userInfo,
  //       userID: "1ee08701-7d4e-42b2-b3d5-c43aa4d9a654",
  //       msg: msg
  //     })
  //   );

  //   this.setState({
  //     msg: null
  //   });
  // }
  render() {
    return (
      <Footer id="footer">
        <TextArea
          rows={4}
          placeholder={`请输入你想说的话...`}
          value={this.state.msg}
          onChange={this.updateMsg.bind(this)}
        />
        <section className="action">
          <span className="desc">按下Ctrl+Enter换行</span>
          <Button
            type="primary"
            onClick={this.postAll.bind(this)}
            className="btn_send"
          >
            发送
          </Button>
        </section>
      </Footer>
    );
  }
}

export default FooterComponent;
