import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Tag } from 'antd';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom';
import ContentCtn from '../../register&login/containers/UserListCtn';
import { Link } from 'react-router-dom';
import BlogTableCtn from '../containers/BlogListCtn';

// const Password = Input.Password;
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const { CheckableTag } = Tag;

class BlogManagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: []
    };
    // const { getBlogCategories } = this.props;
    // getBlogCategories();
  }
  componentDidMount() {
    const { getBlogCategories } = this.props;
    getBlogCategories();
  }
  handleRegister = e => {
    const { form, blogs, addBlog } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        console.log('handleRegister has err: ', err);
        return;
      }
      // console.log('in handleRegister/this.props.users=', this.props.users);
      // if (blogs.find(b => b.name === values.name)) {
      //   console.log('username already exist!');
      //   return;
      // }
      // console.log('handleRegister success, Received values of form: ', values);
      addBlog(values);
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // const { isLogin } = this.props;
    // if (isLogin) {
    //   console.log('before handleLogin, loginSuccess=', this.state.loginSuccess);
    //   this.setState({
    //     loginSuccess: true
    //   });
    //   console.log('after handleLogin, loginSuccess=', this.state.loginSuccess);
    // } else {
    this.handleRegister(e);
    // }
  };
  handleValidator = (rule, val, callback) => {
    if (!val) {
      callback();
    }
    // let validateResult = val.length >= 30; //&& val.length < 10;
    // // console.log('username = ',validateResult);
    // if (!validateResult) {
    //   callback(
    //     'Please input validate username, length must be >=8, current length=' +
    //       val.length
    //   );
    // }
    callback();
  };
  handleTagChange = (tag, checked) => {
    const { selectedTags } = this.state;
    const newSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', newSelectedTags);
    this.setState({ selectedTags: newSelectedTags });
  };
  render() {
    const { isAdd, blogCategories } = this.props;
    console.log(blogCategories);
    const { selectedTags } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('name', {
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
                { required: true, message: 'Please input your content!' }
                // { min: 8, message: 'password needs to be at least 8 chars!' }
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
            <div>
              {blogCategories.map(category => (
                <Tag
                  key={category}
                  checked={selectedTags.indexOf(category) > -1}
                  onChange={checked => this.handleTagChange(category, checked)}
                >
                  {category}
                </Tag>
              ))}
            </div>
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
      </div>
    );
  }
}
export default Form.create({})(BlogManagePage);
