import React, { Component } from "react";
import SiderItems from "../../SiderItems";
import "./style.css";


const SiderCompnentList = SiderItems => (item, key) => {
  return (
    <article data-id={item.key} key={key} className={`chat_item`}>
      {SiderItems(item, { nameClass: `nickname_text` })}
    </article>
  );
};

const WithSiderCompnentList = SiderCompnentList(SiderItems);

export default WithSiderCompnentList;
