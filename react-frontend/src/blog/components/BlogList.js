import React from 'react';
import BlogCard from './BlogCard';
import '../blog.css';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    const { getAllBlogs } = this.props;
    getAllBlogs();
  }
  render() {
    const { blogs } = this.props;
    console.log('BlogList blogs=', blogs);
    return (
      <div id="blogs">
        <h1>The Blog Table contains a list of BlogCards</h1>
        <hr />
        {blogs.map(b => {
          console.log('blog = ', b);
          return <BlogCard key={b.get('id')} blog={b} />;
        })}
        <hr />
      </div>
    );
  }
}
export default BlogList;
