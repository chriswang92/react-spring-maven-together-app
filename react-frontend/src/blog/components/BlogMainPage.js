import React from 'react';
// import LoginFormCtn from '../containers/LoginFormCtn';
import BlogListCtn from '../containers/BlogListCtn';
import BlogManagePageCtn from '../containers/BlogManagePageCtn';

class BlogMainPage extends React.Component {
  render() {
    return (
      <div>
        <BlogManagePageCtn />
        <BlogListCtn />
      </div>
    );
  }
}
export default BlogMainPage;
