import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { List, Avatar } from "antd";
import { connect } from 'dva';
import "./style.css";

class ListComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelf: false,
      messageList: []
    };
  }
  renderItem(messageUser, item) {
    const { pid: key } = messageUser;

    const messageByOther = messageUser.pid = item.userPid;
    const ComponentClass = messageByOther ? "speckFromOther" : "speckFromOwn";
    // const ComponentClass = "speckFromOther";
    const avatar = messageUser.avatar;
    const message = item.data.split("<br>");
    return (
      <List.Item className={`${ComponentClass}`}>
        <List.Item.Meta
          avatar={<Avatar size="large" shape="square" src={avatar} />}
          description={message.map((i, d) => {
            return <div key={d}>{i} {d > 0 ? <br /> : null}
            </div>
          })}
        />
      </List.Item>
    );
  }
  scrollHandle() {
    const scrollDom = ReactDOM.findDOMNode(this.refs.talkList);
    if (scrollDom) {
      scrollDom.scrollTop = scrollDom.scrollHeight;
    }
  }
  render() {
    const { messageUser, messageList } = this.props;

    // 生成props
    const ListProps = {
      ref: "talkList",
      className: `talkList`,
      itemLayout: "horizontal",
      size: "middle",
      split: false,
      dataSource: messageList
    };
    return (
      <List {...ListProps} renderItem={this.renderItem.bind(this, messageUser)} />
    );
  }
  componentWillReceiveProps(prev, old) {
  }
  componentDidMount() {
    // 让滑轮每次都在最下面
    this.scrollHandle()
  }
}
const mapStateToProps = ({ message }) => {
  const { messageList, messageUser } = message;
  return { messageList, messageUser } || {}
}
export default connect(mapStateToProps)(ListComponent);
