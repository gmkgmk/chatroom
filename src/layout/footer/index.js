import React from "react";
import { Layout, Input, Button } from "antd";
const { TextArea } = Input;
const { Footer } = Layout;
import { connect } from 'dva';
import hotkeys from 'hotkeys-js';

import "./style.css";
import message from "../../model/message";
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
    const { dispatch } = this.props;
    const { msg } = this.state;
    const value = this.refs.pre.innerHTML.trim();
    if (!value) return;
    dispatch({
      type: "message/send",
      payload: value
    })
    this.refs.pre.innerHTML = null
  }
  onEnter(e) {
    // console.log(this.refs.pre.focus())

    // const { keyCode, ctrlKey } = e;
    // if (13 == keyCode) {
    //   this.postAll();
    //   e.preventDefault();
    // //   return
    // }
    // if (13 == keyCode && ctrlKey) {
    //   e.preventDefault();
    //   return
    // }
  }
  componentDidMount() {
    hotkeys('ctrl + enter', function (e) {
      if (e.target.tagName == "PRE") {
        this.refs.pre.innerHTML += "<br\/><br\/>"
        var selection = getSelection()
        var range = selection.getRangeAt(0)
        console.log(range)
        range.collapse(true)
        selection.removeAllRanges()
        // 插入新的光标对象
        selection.addRange(range)
        // this.refs.pre.scrollTop = this.refs.pre.scrollHeight
        // console.log(this.refs.pre.scrollTop)
        // console.log(this.refs.pre.scrollHeight)
      }
    }.bind(this));
    hotkeys('enter', function (e) {
      if (e.target.tagName == "PRE") {
        e.preventDefault();
      }
    }.bind(this));
  }
  render() {
    return (
      <Footer id="footer">

        <pre
          ref={"pre"}
          className={`chat-content`}
          placeholder={`请输入你想说的话...`}
          value={this.state.msg}
          // onChangeCapture={this.updateMsg.bind(this)}
          autoComplete="false"
          resize="none"
          onKeyDown={this.onEnter.bind(this)}
          contentEditable="true"
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


export default connect()(FooterComponent);
