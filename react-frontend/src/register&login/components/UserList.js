import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

class UserList extends React.Component {
  render() {
    // const {getFieldDecorator} = this.props.form;
    const { users } = this.props;
    console.log('rendering Content, users=', this.props);
    return (
      <div id="list">
        <h1>Content, total users#: {users.size}</h1>
        {users.map(u => (
          <div key={u.get('id')}>
            id: {u.get('id')}, username: {u.get('username')}
          </div>
        ))}
      </div>
    );
  }
}
// export default Form.create({})(LoginForm);
export default UserList;
