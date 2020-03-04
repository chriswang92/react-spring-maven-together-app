import React from 'react';
import BlogListCtn from '../containers/BlogListCtn';
import BlogManagePageCtn from '../containers/BlogManagePageCtn';
import '../../index.css';

let currentUser = 1;
class BlogMainPage extends React.Component {
  render() {
    return (
      <div id="BlogMainPage">
        {currentUser === 1 ? <BlogManagePageCtn /> : null}
        <BlogListCtn />
      </div>
    );
  }
}
export default BlogMainPage;
