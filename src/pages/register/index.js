import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'dva';
import { Button, Input, Icon, Checkbox } from 'antd';
import "./style.css";
const prefix = "Register";

class Register extends Component {
  render() {
    const { username, password } = this.props;
    const activeElement = document.activeElement.id;
    const suffixUserName = username && activeElement === "username" ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'username')} /> : null;
    const suffixPassword = password && activeElement === "password" ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'password')} /> : null;
    return (
      <section className={`${prefix}-container layoutBg`}>
        <article className={`${prefix}-form-body `}>
          <h1 className="title">登录</h1>
          <Input
            placeholder="admin"
            maxLength="20"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixUserName}
            onChange={this.onChangeHandle.bind(this, 'username')}
            onClick={this.onClickHandle.bind(this)}
            size="large"
            id="username"
            value={username}
          />
          <Input
            placeholder="123456"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffixPassword}
            id="password"
            type="password"
            onClick={this.onClickHandle.bind(this)}
            onChange={this.onChangeHandle.bind(this, 'password')}
            size="large"
            maxLength="10"
            value={password}
          />
          <label className={`${prefix}-label`}>
            <Checkbox checked={true}>Checkbox</Checkbox>
            <a className="label-link">忘记密码?</a>
          </label>
          <Button type="primary" size="large" className="form-btn" onClick={this.register.bind(this)}>登录</Button>
        </article>
      </section>
    );
  }
  onChangeHandle = (type, e) => {
    const { dispatch } = this.props;
    const value = { [type]: e.target.value }
    dispatch({
      type: "user/changeHandle",
      value,
    })
  }
  onClickHandle() {
    // 点击的时候重新刷新视图
    this.setState({})
  }
  emitEmpty(type) {
    const { dispatch } = this.props;

    dispatch({
      type: "user/emitEmpty",
      valueName: type,
    })
  }
  register() {
    const { dispatch } = this.props;

    dispatch({
      type: "user/register"
    })
  }
}
const mapStateToProps = ({ user }) => {
  return user || {}
}
export default connect(mapStateToProps)(Register);
