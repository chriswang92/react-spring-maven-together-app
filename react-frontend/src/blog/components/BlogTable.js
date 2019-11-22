import React from 'react';
import BlogCard from './BlogCard';

class BlogTable extends React.Component {
  constructor(props) {
    super(props);
    const { getAllBlogs } = this.props;
    getAllBlogs();
  }
  render() {
    const { blogs } = this.props;
    // console.log('blogs=', blogs);
    return (
      <div>
        <hr />
        <h1>The Blog Table contains a list of BlogCards</h1>
        {blogs.map(b => {
          // console.log('blog = ', b);
          return <BlogCard key={b.get('id')} blog={b} />;
        })}
        <hr />
      </div>
    );
  }
}
export default BlogTable;
