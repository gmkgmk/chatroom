import React, { Component } from "react";
import "./style.css";

const SiderCompnentList = (props) => {
  const {item} = props
  return (
    <article data-id={item.key} className={`chat_item`}>
      <div className="avatar">
        <img src={item.avatar} className="img" />
      </div>
      <div className={`info`}>
        <h3 className={`nickname`}>
          <span className={`nickname_text`}>{item.name}</span>
        </h3>
      </div>
    </article>
  );
};

export default SiderCompnentList;
