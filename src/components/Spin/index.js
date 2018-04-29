import React from "react";
import './style.css';

const Spin = () => {
  return (
    <section className="loading-container">
      <svg className="svg">
        <circle className="cir" />
      </svg>
      <span className="loading-message">
        加载中...
     </span>
    </section>
  )
}

export default Spin