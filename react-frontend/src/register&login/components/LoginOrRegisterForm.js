import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom';
import ContentCtn from '../containers/ContentCtn';
import { Link } from 'react-router-dom';

const Password = Input.Password;
const FormItem = Form.Item;

class LoginOrRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    const { isLogin, users, getAllUsers } = this.props;
    if (!isLogin) {
      getAllUsers();
    }
    console.log('in loginregform constructor, this.props.users=', users);

    this.state = { loginSuccess: false };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRegister = e => {
    const { form, users, registerUser } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        console.log('handleRegister has err: ', err);
        return;
      }
      console.log('in handleRegister/this.props.users=', this.props.users);
      if (users.find(u => u.username === values.username)) {
        console.log('username already exist!');
        return;
      }
      console.log('handleRegister success, Received values of form: ', values);
      registerUser(values);
    });
  };

  checkUser = (uname, pwd) => {
    const { users } = this.props;
    for (var u of users) {
      if (u.username === uname && u.password === pwd) {
        return true;
      }
      // var usersToCheckArr = [];
      // usersToCheckArr.push({username:u.username, password: u.password});
      // return usersToCheckArr;
    }
    return false;
  };
  handleLogin = e => {
    const { users, form } = this.props;
    console.log(
      'in handleSubmit, saw a login submit, do handleLogin..|this.registeredUsers=',
      users
    );
    if (!users || users.length === 0) {
      console.log('No registeredUser exists, users=', users);
      return false;
    }
    form.validateFields((err, values) => {
      if (err) {
        console.log('handleLogin has err: ', err);
      }
      let isUserRegistered = false;
      console.log('before check, checkuser=', isUserRegistered);
      isUserRegistered = this.checkUser(values.username, values.password);
      console.log('after check, checkuser=', isUserRegistered);

      if (isUserRegistered) {
        console.log(
          'user exist, login success. username=',
          values.username,
          'pwd=',
          values.password
        );
        this.loginSuccess = true;
        return true;
      } else {
        console.log(
          'user does not exist, login failed. username=',
          values.username,
          'pwd=',
          values.password
        );
        return false;
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { isLogin, getAllUsers } = this.props;
    if (isLogin) {
      console.log('before handleLogin, loginSuccess=', this.state.loginSuccess);
      this.setState({
        loginSuccess: true
      });
      console.log('after handleLogin, loginSuccess=', this.state.loginSuccess);
    } else {
      this.handleRegister(e);
      getAllUsers();
    }
  };

  handleValidator = (rule, val, callback) => {
    if (!val) {
      callback();
    }
    let validateResult = val.length >= 8; //&& val.length < 10;
    // console.log('username = ',validateResult);
    if (!validateResult) {
      callback(
        'Please input validate username, length must be >=8, current length=' +
          val.length
      );
    }
    callback();
  };

  render() {
    const { isLogin } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className='login-form' onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              // initialValue: {username:'', password:''},
              rules: [
                // {required: true, message: 'Please input your username!'},
                // {min: 8, message: 'username needs to be at least 8 chars!'}
                { validator: this.handleValidator }
              ]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Username'
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
                { min: 8, message: 'password needs to be at least 8 chars!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='Password'
              />
            )}
          </FormItem>

          {isLogin ? (
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
            </FormItem>
          ) : null}

          <FormItem>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              {isLogin ? 'Login321' : 'Register123'}
            </Button>
            Or{' '}
            <Link to={isLogin ? '/register' : '/login'}>
              {isLogin ? 'register' : 'login'} now!
            </Link>
            {this.loginSuccess ? <p>Login success!</p> : null}
          </FormItem>
        </Form>

        <Link to='/home'>
          <Button>home</Button>
        </Link>
        <hr />
      </div>
    );
  }
}
export default Form.create({})(LoginOrRegisterForm);
