import React from 'react';

class BlogCard extends React.Component {
  render() {
    // console.log('in blogCard, ', this.props);
    const { blog } = this.props;
    const name = blog.get('name');
    const id = blog.get('id');
    const content = blog.get('content');
    return (
      <div>
        <h2>
          Blog - {id} : {name}
        </h2>
        <p>{content}</p>
      </div>
    );
  }
}
export default BlogCard;
