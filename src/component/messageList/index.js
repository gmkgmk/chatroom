import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List, Avatar } from "antd";
import "./style.css";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMe: false
    };
  }
  renderItem(userInfo, item) {
    const { key } = userInfo;
    const { person: { key: personKey, avatar } } = item;
    const isOwn = key === personKey;
    const ComponentClass = isOwn ? "speckFromOwn" : "speckFromOther";
    return (
      <List.Item className={` ${ComponentClass}`}>
        <List.Item.Meta
          avatar={<Avatar size="large" shape="square" src={avatar} />}
          description={item.message}
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
    const { socket, userInfo, messageList } = this.props;
    const { isMe } = this.state;
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
      <List {...ListProps} renderItem={this.renderItem.bind(this, userInfo)} />
    );
  }

  componentDidUpdate() {
    this.scrollHandle();
  }
}

export default ListComponent;
