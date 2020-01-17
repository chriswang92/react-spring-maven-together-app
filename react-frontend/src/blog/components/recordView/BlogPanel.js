import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import Styled from 'styled-components';
import { getAvatarAndTagByCategory } from '../BlogList';

const StyledPanel = Styled.div`
background-color:lightblue;
text-align: center;
padding: 20px 40px;
max-width: 1000px;
border: 3px solid #73AD21;
margin: 20px 400px;
height: auto;
border-radius: 25px;
`;

const ContentWindow = Styled.div`
background: FloralWhite;
word-wrap: break-word;
margin: 10px 0;
padding: 20px 20px;
height: auto;
border-radius: 25px;
`;

const InfoBar = Styled.div`
background: Cornsilk;
padding: 10px;
height: auto;
background-clip: padding-box;
text-align: center;
border-radius: 15px;
`;

class BlogPanel extends React.Component {
  render() {
    console.log('reached in blogCard, ', this.props);
    const { allBlogs, selectedBlogId, setSelectedBlogId } = this.props;
    if (allBlogs) {
      const blog = allBlogs
        .filter(blog => blog.get('id') === selectedBlogId)
        .first();
      console.log(blog);
      const title = (
        <div onClick={console.log('title clicked')}>{blog.get('title')}</div>
      );
      const id = blog.get('id');
      const description = blog.get('description');
      const content = blog.get('content') || 'no content';
      const categories = blog.get('category') || [];
      const avatarAndTagArr = getAvatarAndTagByCategory(blog);
      const createBy =
        blog.get('createByUserId') === 1 ? 'Admin' : blog.get('createByUserId');
      return (
        <StyledPanel>
          <Button onClick={() => setSelectedBlogId(null)}>home</Button>
          <h1>{title}</h1>
          <h2>
            Blog - {id} : {description}
          </h2>
          <InfoBar>
            categories : {avatarAndTagArr.map(avatarAndTag => avatarAndTag.tag)}
            , avatars:{' '}
            {avatarAndTagArr.map(avatarAndTag => avatarAndTag.avatar)},
            createdBy: {createBy}, createAt: {blog.get('createDateTime')}
          </InfoBar>
          <ContentWindow>{content}</ContentWindow>
        </StyledPanel>
      );
    }
    return null;
  }
}
export default BlogPanel;
