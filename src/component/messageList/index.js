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
  renderItem(userInfo, item) {
    console.log("item", item)
    const { pid: key } = userInfo;
    const { person: { pid: personKey, avatar } } = item;
    if (!personKey) return

    const isOwn = key === personKey;
    const ComponentClass = isOwn ? "speckFromOwn" : "speckFromOther";
    const message = item.message.split("<br>");
    return (
      <List.Item className={` ${ComponentClass}`}>
        <List.Item.Meta
          avatar={<Avatar size="large" shape="square" src={avatar} />}
          description={message.map((i, d) => {
            return <div key={d}>{i} {d>0?<br />:null}
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
    const { userInfo, messageList } = this.props;
    const { isSelf } = this.state;
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
  componentDidMount() {
    // 让滑轮每次都在最下面
    this.scrollHandle()
  }
}
const mapStateToProps = ({ message: { messageList }, userInfo }) => {
  return { messageList, userInfo } || {}
}
export default connect(mapStateToProps)(ListComponent);
