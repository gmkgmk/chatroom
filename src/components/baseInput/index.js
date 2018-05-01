import React, { Component } from 'react'
import { Input } from 'antd';

export default class Base_input extends Component {

  render() {
    const inputProp = {
      autoComplete: "true",
      size: "large",
      maxLength: "10",
      type: "text",
      placeholder: "",
      ...this.props
    }
    return (
      <Input  {...inputProp} />
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    if (this.props.suffix !== nextProps.suffix) {
      return true;
    }
    return false;
  }
}