import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import BlogListCtn from '../../blog/containers/BlogListCtn';
import BlogPanelCtn from '../../blog/containers/recordView/BlogPanelCtn';

class BasicLayout extends React.Component {
  render() {
    const { selectedBlogId } = this.props;
    console.log(selectedBlogId);
    return (
      <div className="homeLayout">
        {selectedBlogId ? <BlogPanelCtn /> : <BlogListCtn />}
      </div>
    );
  }
}
export default BasicLayout;
