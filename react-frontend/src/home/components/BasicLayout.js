import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import BlogListCtn from '../../blog/containers/BlogListCtn';
import NavBar from './NavBar';
import BlogPanelCtn from '../../blog/containers/recordView/BlogPanelCtn';

const HomeHeader = () => (
  <div
    style={{
      margin: '0 100px',
      textAlign: 'center',
      backgroundColor: 'lightGreen'
    }}
  >
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
  </div>
);

class BasicLayout extends React.Component {
  render() {
    const { selectedBlogId } = this.props;
    console.log(selectedBlogId);
    return (
      <div className="homeLayout">
        <NavBar />
        {selectedBlogId ? <BlogPanelCtn /> : <BlogListCtn />}
      </div>
    );
  }
}
export default BasicLayout;
