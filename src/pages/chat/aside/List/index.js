import { PureComponent } from "react";
import "./style.css";
import { connect } from 'dva';
import SideItems from "./../../../../HOC/sideItemHOD";

@connect(({ userInfo }) => {
  return userInfo
})
export default class SideList extends PureComponent {
  onClickHandle = () => {
    console.log("点击")
  }
  ListItem = (item, idx) => {
    const onLine = (
      <p className="info-box">
        <span className={`circle ${item.onLine ? 'online' : ''}`}></span>
      </p>
    )

    return (
      <article data-id={item.key} key={idx} className={`chat_item  active`} onClick={this.onClickHandle.bind(this, item)}>
        <SideItems item={item} nameClass="nickname_text" children={onLine} />
      </article >
    );
  }
  render() {
    const { friendList = [] } = this.props;

    let renderList = [];
    if (friendList.length > 0) {
      renderList = friendList.map(this.ListItem)
    }
    return <section className={`sideList`}>{renderList}</section>;
  }
}

