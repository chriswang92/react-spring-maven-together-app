import React from 'react';
class BlogCard extends React.Component {
  render() {
    // console.log('in blogCard, ', this.props);
    const { blog } = this.props;
    const title = blog.get('title');
    const id = blog.get('id');
    const content = blog.get('content') || 'no content';
    const categories = blog.get('category') || [];
    return (
      <div>
        <h2>
          Blog - {id} : {title} , categories :
          {categories.map(category => category + ' ')}
        </h2>
        <p>{content}</p>
      </div>
    );
  }
}
export default BlogCard;
