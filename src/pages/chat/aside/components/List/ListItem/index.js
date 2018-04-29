import React from "react";
import SiderItems from "./../../ListItem";
// import { connect } from 'dva';
import "./style.css";


const SiderCompnentList = SiderItems => (item, key,dispatch,chat) => {
  return (
    <article data-id={item.key} key={key} className={`chat_item ${chat.pid===item.pid?'active':''}`} onClick={handClick.bind(this,item,dispatch)}>
      {SiderItems(item, { nameClass: `nickname_text`,clientId:chat.clientId })}
    </article>
  );
};
function handClick(item,dispatch) {
  dispatch({
    type: "chat/init",
    chat:item
  })
}
const WithSiderCompnentList = SiderCompnentList(SiderItems);


export default WithSiderCompnentList;
