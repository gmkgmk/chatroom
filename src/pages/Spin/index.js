import React from "react";
import './style.css';

const Spin = () => {
  return (
    <section className="loading-container">
      <svg className="svg">
        <circle className="cir" />
      </svg>
    </section>
  )
}

export default Spin