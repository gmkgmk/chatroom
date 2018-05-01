import React from "react";
import ReactDOM from "react-dom";
import { Layout, Button } from "antd";
import { connect } from 'dva';
import hotkeys from 'hotkeys-js';
import "./style.css";
const { Footer } = Layout;

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
    const value = this.pre.innerHTML.trim();
    if (!value) return;
    dispatch({
      type: "message/privateChannel",
      payload: { message: value }
    })
    dispatch({
      type: "message/msgBySelf",
      payload: { message: value }
    })
    this.pre.innerHTML = null
  }
  onEnter(e) {
    const { keyCode, ctrlKey } = e;

    if (13 === keyCode) {
      if (ctrlKey) return
      this.postAll();
    }
  }
  setRanger() {
    var textbox = this.pre;
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(textbox);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    this.scrollHandle()
  }
  componentDidMount() {
    document.querySelector('.chat-content').focus();

    hotkeys('ctrl + enter', (e) => {
      if (e.target.tagName === "PRE" && this.pre) {
        this.pre.innerHTML += "<br\/><br\/>";
        this.setRanger()
        return false
      }
    });
  }
  render() {
    return (
      <Footer className="chatFoot">
        <pre
          ref={(pre) => this.pre = pre}
          className={`chat-content`}
          placeholder={`请输入你想说的话...`}
          value={this.state.msg}
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
  scrollHandle() {
    const scrollDom = ReactDOM.findDOMNode(this.pre);
    if (scrollDom) {
      scrollDom.scrollTop = scrollDom.scrollHeight;
    }
  }
}

const mapStateToProps = ({ chat }) => {
  return chat || {}
}
export default connect(mapStateToProps)(FooterComponent);
