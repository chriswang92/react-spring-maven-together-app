import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import BlogTableCtn from '../containers/BlogTableCtn';

class BasicLayout extends React.Component {
  render() {

    return (
      <div>
        <h1>Welcome to chriswcg 's Home page</h1>
        <BlogTableCtn />
        <Link to='/login'><Button>login</Button></Link> 
        <Link to='/register'><Button>register</Button></Link> 
        <Link to='/game'><Button>Games</Button></Link>
      </div>
    );
  }
}
export default BasicLayout;