import React from 'react';
import { Form, Icon, Input, Button, Tag } from 'antd';
import 'antd/dist/antd.css';
import { Link, Redirect } from 'react-router-dom';
import '../../index.css';
import Immutable from 'immutable';

// const Password = Input.Password;
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const { CheckableTag } = Tag;

class BlogManagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: [],
      redirect: false
    };
    const { getBlogCategories } = this.props;
    getBlogCategories();
  }
  componentDidMount() {
    const { getBlogCategories } = this.props;
    getBlogCategories();
  }
  handleSubmit = e => {
    e.preventDefault();
    const { form, blogCategories, addBlog } = this.props;
    const { selectedTags } = this.state;
    form.validateFields((err, values) => {
      if (err) {
        console.log('handleRegister has err: ', err);
        return;
      }
      //convert selectedTags to blogCategories which is an array of blogCategory objects
      let readyCategories = Immutable.List();
      selectedTags.forEach(tag => {
        if (blogCategories.includes(tag)) {
          const id = blogCategories.findKey((v, k) => v === tag);
          readyCategories.insert(tag);
        }
      });
      // const keys = filteredEntries.keys();
      addBlog({ ...values, category: selectedTags });
      this.setState({ redirect: true });
    });
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
    const { selectedTags, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    const { isAdd, blogCategories } = this.props;
    if (blogCategories) {
      console.log(
        blogCategories,
        blogCategories.keys(),
        blogCategories.valueSeq().toJS()
      );
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="PageBackground">
        <Form
          id="PageElement"
          className="login-form"
          onSubmit={this.handleSubmit}
        >
          <FormItem>
            {getFieldDecorator('title', {
              // initialValue: {username:'', password:''},
              rules: [
                { required: true, message: 'Please input title!' },
                // {min: 8, message: 'username needs to be at least 8 chars!'}
                { validator: this.handleValidator }
              ]
            })(
              <Input
                prefix={
                  <Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Blog title"
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
              {blogCategories
                ? blogCategories
                    .valueSeq()
                    // .toJS()
                    .map((categoryLabel, categoryId) => (
                      <CheckableTag
                        key={categoryLabel}
                        checked={selectedTags.indexOf(categoryLabel) > -1}
                        onChange={checked =>
                          this.handleTagChange(categoryLabel, checked)
                        }
                      >
                        {categoryLabel}
                      </CheckableTag>
                    ))
                : null}
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

        <Link to="/home" id="PageElement">
          <Button>home</Button>
        </Link>
      </div>
    );
  }
}
export default Form.create({})(BlogManagePage);
