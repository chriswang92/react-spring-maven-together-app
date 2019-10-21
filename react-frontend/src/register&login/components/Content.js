import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Content extends React.Component {

  render() {
    // const {getFieldDecorator} = this.props.form;
    console.log('rendering Content, users=',this.props);
    return (
      <div>
        <h1>Content, total users#:
        </h1>
        {this.props.users.map(u=><div key={u.id}>id: {u.id}, username: {u.username}</div>)}
      </div>
    );
  }
}
// export default Form.create({})(LoginForm);
export default Content;