import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import BlogTableCtn from '../../blog/containers/BlogTableCtn';

class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to chriswcg 's Home page</h1>
        <Link to="/login">
          <Button>login</Button>
        </Link>
        <Link to="/register">
          <Button>register</Button>
        </Link>
        <Link to="/game">
          <Button>Games</Button>
        </Link>
        <Link to="/blog">
          <Button>Blog</Button>
        </Link>
        <BlogTableCtn />
      </div>
    );
  }
}
export default BasicLayout;
