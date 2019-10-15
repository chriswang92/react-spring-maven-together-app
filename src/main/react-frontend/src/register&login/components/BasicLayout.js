import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import BlogTableCtn from '../containers/BlogTableCtn';

class BasicLayout extends React.Component {
  render() {

    return (
      <div>
        <h1>BasicLayout123</h1>
        <BlogTableCtn />
        <Button><Link to='/login'>login</Link> </Button>
        <Button><Link to='/register'>register</Link> </Button>
        <Button><Link to='/game'>Games</Link></Button>
      </div>
    );
  }
}
export default BasicLayout;