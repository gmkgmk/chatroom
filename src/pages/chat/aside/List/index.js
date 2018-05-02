import { PureComponent } from "react";
import "./style.css";
import { connect } from 'dva';
import SideItems from "./../../../../HOC/sideItemHOD";
import PropTypes from 'prop-types';

@connect(({ userInfo = {} }) => {
  return userInfo;
})
export default class SideList extends PureComponent {
  static propTypes = {
    friendList: PropTypes.array.isRequired
  }
  onClickHandle = (user) => {
    this.props.dispatch({
      type: `chat/set`,
      payload: user
    });
    this.props.dispatch({
      type: `userInfo/update`,
      payload: {
        chatPid: user.pid
      }
    });
  }
  ListItem = (item, idx) => {
    const onLine = (
      <p className="info-box">
        <span className={`circle ${item.online ? 'online' : ''}`}></span>
      </p>
    )
    const activePid = this.props.chatPid;
    const isActive = (activePid === item.pid) ? 'active' : ''
    return (
      <article data-id={item.key} key={idx} className={`chat_item ${isActive}`} onClick={this.onClickHandle.bind(this, item)}>
        <SideItems item={item} nameClass="nickname_text" children={onLine} />
      </article >
    );
  }
  render() {
    const { friendList = [] } = this.props;
    console.log(this.props)
    let renderList = [];
    if (friendList.length > 0) {
      renderList = friendList.map(this.ListItem)
    }
    return <section className={`sideList`}>{renderList}</section>;
  }
}

