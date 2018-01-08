import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import "./style.css";
import MessageList from "../../component/messageList";

class ContentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <Content>
        <MessageList {...this.props} />
      </Content>
    );
  }
}

export default ContentComponent;
