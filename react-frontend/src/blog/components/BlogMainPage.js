import React from 'react';
// import LoginFormCtn from '../containers/LoginFormCtn';
import BlogListCtn from '../containers/BlogListCtn';
import BlogManagePageCtn from '../containers/BlogManagePageCtn';
import '../blog.css';
class BlogMainPage extends React.Component {
  render() {
    return (
      <div id="BlogMainPage">
        <BlogManagePageCtn />
        <BlogListCtn />
      </div>
    );
  }
}
export default BlogMainPage;
