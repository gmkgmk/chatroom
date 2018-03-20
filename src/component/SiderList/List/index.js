import React, { Component } from "react";
import SiderItems from "../../SiderItems";
import { connect } from 'dva';
import "./style.css";


const SiderCompnentList = SiderItems => (item, key,dispatch,talkInfo) => {
  console.log('****',talkInfo)
  return (
    <article data-id={item.key} key={key} className={`chat_item ${talkInfo.pid==item.pid?'active':''}`} onClick={handClick.bind(this,item,dispatch)}>
      {SiderItems(item, { nameClass: `nickname_text`,clientId:talkInfo.clientId })}
    </article>
  );
};
function handClick(item,dispatch) {
  dispatch({
    type: "talkInfo/init",
    talkInfo:item
  })
}
const WithSiderCompnentList = SiderCompnentList(SiderItems);


export default WithSiderCompnentList;
