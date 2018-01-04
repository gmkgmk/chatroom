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
  postMsg() {
    const { socket, userInfo } = this.props;
    const { msg } = this.state;
    if (!msg) return;
    socket.send(
      JSON.stringify({
        type: 1,
        user: userInfo,
        msg: msg
      })
    );
    this.setState({
      msg: null
    });
  }
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
            onClick={this.postMsg.bind(this)}
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
