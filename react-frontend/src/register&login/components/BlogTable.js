import React from 'react';
import BlogCard from './BlogCard';

class BlogTable extends React.Component {
  render() {

    return (
      <div>
        <hr/>
        <h1>The Blog Table contains a list of BlogCards</h1>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <hr/>
      </div>
    );
  }
}
export default BlogTable;