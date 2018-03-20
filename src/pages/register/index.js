import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { connect } from 'dva';
import { Button, Input, Icon, Checkbox, Form } from 'antd';
const FormItem = Form.Item;
import "./style.css";
const prefix = "Register";

class Register extends PureComponent {
  render() {
    const { username, password } = this.props;
    const { getFieldDecorator } = this.props.form;

    const activeElement = document.activeElement.id;
    const suffixUserName = username && activeElement === "username" ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'username')} /> : null;
    const suffixPassword = password && activeElement === "password" ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'password')} /> : null;


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
                  maxLength="20"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={suffixUserName}
                  onChange={this.onChangeHandle.bind(this, 'username')}
                  onClick={this.onClickHandle.bind(this)}
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
                  onClick={this.onClickHandle.bind(this)}
                  onChange={this.onChangeHandle.bind(this, 'password')}
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
  register(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        dispatch({
          type: "user/register"
        })
      } else {
        dispatch({
          type: "util/fail",
          message: err
        })
      }
    });
  }
}

const WrappedHorizontalLoginForm = Form.create({})(Register);
const mapStateToProps = ({ user }) => {
  return user || {}
}
export default connect(mapStateToProps)(WrappedHorizontalLoginForm);
