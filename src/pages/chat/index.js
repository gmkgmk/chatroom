import React from "react";
import { Layout } from "antd";

import Header from "./header";
import Footer from "./footer";
import Aside from "./aside";
import Content from "./content";
import "./style.css";

const Chat = () => {
  return (
    <section className="chat-container">
      <Aside />
      <Layout className="layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </section>
  )
}

export default Chat