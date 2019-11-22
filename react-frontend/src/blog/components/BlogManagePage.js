import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom';
import ContentCtn from '../../register&login/containers/UserListCtn';
import { Link } from 'react-router-dom';
import BlogTableCtn from '../containers/BlogTableCtn';

// const Password = Input.Password;
const FormItem = Form.Item;
const TextArea = Input.TextArea;

class BlogManagePage extends React.Component {
  constructor(props) {
    super(props);
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
        this.submitSuccess = true;
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
    // const { isAdd } = this.props;
    // if (isAdd) {
    //   console.log('before handleLogin, submitSuccess=', this.state.submitSuccess);
    //   console.log('after handleLogin, submitSuccess=', this.state.submitSuccess);
    // } else {
    this.handleRegister(e);
    // }
    this.setState({
      submitSuccess: true
    });
  };

  handleValidator = (rule, val, callback) => {
    if (!val) {
      callback();
    }
    let validateResult = val.length >= 30; //&& val.length < 10;
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
    const { isAdd } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              // initialValue: {username:'', password:''},
              rules: [
                { required: true, message: 'Please input your username!' },
                // {min: 8, message: 'username needs to be at least 8 chars!'}
                { validator: this.handleValidator }
              ]
            })(
              <Input
                prefix={
                  <Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Blog name"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('content', {
              rules: [
                { required: true, message: 'Please input your Password!' },
                { min: 8, message: 'password needs to be at least 8 chars!' }
              ]
            })(
              <TextArea
                rows={8}
                // autosize
                // type='password'
                placeholder="Input blog content here"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isAdd ? 'Add' : 'Save'}
            </Button>
            {/* Or{' '}
            <Link to={isAdd ? '/register' : '/login'}>
              {isAdd ? 'register' : 'login'} now!
            </Link> */}
            {this.submitSuccess ? <p>Submit success!</p> : null}
          </FormItem>
        </Form>

        <Link to="/home">
          <Button>home</Button>
        </Link>
        <BlogTableCtn />
      </div>
    );
  }
}
export default Form.create({})(BlogManagePage);
