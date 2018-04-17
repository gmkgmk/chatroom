import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { connect } from 'dva';
import { Button, Input, Icon, Checkbox, Form } from 'antd';
const FormItem = Form.Item;
import "./style.css";
const prefix = "Register";

class Register extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      usernameActive: false,
      passwordActive: false,
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { username, password, usernameActive, passwordActive } = this.state;

    const suffixUserName = usernameActive ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'username')} /> : null;
    const suffixPassword = passwordActive ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'password')} /> : null;

    return (
      <section className={`${prefix}-container layoutBg`}>
        <article className={`${prefix}-form-body `}>
          <h1 className="title">登录</h1>
          <Form layout="inline">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的用户名或者邮箱' }],
              })(
                <Input
                  placeholder="admin"
                  autoComplete="true"
                  maxLength="20"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={suffixUserName}
                  onChange={this.onChangeHandle.bind(this, 'username')}
                  onClick={this.onClickHandle.bind(this, 'username')}
                  onFocus={this.onFocusHandle.bind(this, 'username')}
                  size="large"
                  onPressEnter={this.register.bind(this)}
                  id="username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请确认您的密码,最少输入6位!', min: 6, max: 10, }],
              })(
                <Input
                  placeholder="123456"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={suffixPassword}
                  id="password"
                  type="password"
                  autoComplete="true"
                  onClick={this.onClickHandle.bind(this, "password")}
                  onChange={this.onChangeHandle.bind(this, 'password')}
                  onFocus={this.onFocusHandle.bind(this, 'password')}
                  onPressEnter={this.register.bind(this)}
                  size="large"
                  maxLength="10"
                />
              )}
            </FormItem>
            <FormItem>
              <span className={`${prefix}-label`}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <a className="label-link">忘记密码?</a>
              </span>
              <Button
                type="primary"
                size="large"
                className="form-btn"
                onClick={this.register.bind(this)}
              >登录</Button>
            </FormItem>
          </Form>
        </article>
      </section>
    );
  }
  onChangeHandle(type, e) {
    const value = e.target.value;
    this.setState(
      { [type]: value },
      () => {
        this.setActive(type)
      }
    )
  }
  onClickHandle(type) {
    this.setActive(type)
  }
  onFocusHandle(type) {
    this.setActive(type)
  }
  setActive(type) {
    const { username, password } = this.state;
    if (type === 'username' && username) {
      this.setState({
        usernameActive: true,
        passwordActive: false,
      })
      return
    }
    if (type === 'password' && password) {
      this.setState({
        usernameActive: false,
        passwordActive: true,
      })
      return
    }

    this.setState({
      usernameActive: false,
      passwordActive: false,
    })
  }
  emitEmpty(type) {
    this.setState(
      { [type]: null },
      () => {
        this.setActive(type)
      }
    )
    this.props.form.resetFields(type)

  }
  register(e) {
    const state = this.state
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.register(state)
      }
    })
  }
}

const WrappedHorizontalLoginForm = Form.create({})(Register);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    register: (value) => {
      dispatch({
        type: "userInfo/register",
        payload: value
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(WrappedHorizontalLoginForm);
