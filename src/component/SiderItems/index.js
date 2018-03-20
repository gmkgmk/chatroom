import React, { Component } from "react";
import "./style.css";

const SiderItem = (item = {}, props = {}) => {
  const { nameClass } = props;
  if (item) {
    return (
      <section>
        <div className="avatar">
          <img src={item.avatar} className="img" />
        </div>
        <div className={`info`}>
          <h3 className={`nickname`}>
            <span className={`${nameClass}`}>{item.name}</span>
          </h3>
          <p className="info-box">
            {nameClass === "nickname_text" ?
              <span className={`circle ${item.clientId?'online':''}`}></span> : ''}
          </p>
        </div>
      </section>
    );
  }
};

export default SiderItem;
