import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { List, Avatar, Button, Skeleton, Icon, Tag } from 'antd';
import Styled from 'styled-components';
import Immutable from 'immutable';

const ListContainer = Styled.div`
  padding: 10px 200px;
  height: calc(100vh - 194px); //90title+64header+40tab
  table {
    table-layout: fixed;
  }
  margin: auto;
`;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export const getAvatarAndTagByCategory = blog => {
  console.log(blog);
  const blogCategories = blog.get('category');
  const res = [];
  blogCategories.forEach(Category => {
    const blogCategoryText = Category.toLowerCase();
    if (blogCategoryText === 'programming') {
      res.push({
        avatar: <Avatar icon="apartment" />,
        tag: <Tag color="cyan">programming</Tag>
      });
    }
    if (blogCategoryText === 'fitness') {
      res.push({
        avatar: <Avatar icon="smile" />,
        tag: <Tag color="blue">fitness</Tag>
      });
    }
  });
  res.push({
    avatar: (
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    ),
    tag: <Tag color="purple">default</Tag>
  });
  return res;
};
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
      part: 1
    };
  }

  componentDidMount() {
    const { getAllBlogs, getBlogCategories } = this.props;
    getAllBlogs();
    getBlogCategories();
    this.setState({
      initLoading: false
    });
  }

  buildItemActions = [
    <IconText type="star-o" text="156" key="list-vertical-star-o" />,
    <IconText type="like-o" text="156" key="list-vertical-like-o" />,
    <IconText type="message" text="2" key="list-vertical-message" />
  ];
  handleRenderItem = blog => {
    const { setSelectedBlogId } = this.props;
    const avatarAndTagArr = getAvatarAndTagByCategory(blog);
    return (
      <div class="zoom">
        <List.Item
          onClick={() => setSelectedBlogId(blog.get('id'))}
          key={blog.title}
          actions={this.buildItemActions}
          extra={
            <img
              width={200}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <Skeleton avatar title={false} loading={blog.get('loading')} active>
            <List.Item.Meta
              avatar={avatarAndTagArr[0].avatar}
              title={blog.get('title')}
              description={blog.get('content')}
            />
            {avatarAndTagArr.map(avatarAndTag => avatarAndTag.tag)}
          </Skeleton>
        </List.Item>
      </div>
    );
  };

  onLoadMore = () => {
    const { part } = this.state;
    this.setState({
      // loading: true,
      part: part + 1
    });
  };

  handleBlogClick = e => {
    const { setSelectedBlogId } = this.props;
    setSelectedBlogId();
    console.log(e, e.target);
  };

  render() {
    const { allBlogs } = this.props;
    const { part, initLoading, loading } = this.state;
    console.log('BlogList blogs=', allBlogs);
    const displayList =
      allBlogs && allBlogs.size > 0
        ? allBlogs
            .reverse()
            .map(blog => {
              const newB = Immutable.fromJS({
                ...blog.toJS(),
                content: blog.get('content')
                  ? blog.get('content').substring(0, 100)
                  : ''
              });
              console.log(blog, blog.toJS(), newB);
              return newB;
            })
            .slice(0, part * 5)
        : [];
    console.log(displayList);
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px'
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    return (
      <ListContainer>
        <List
          className="demo-loadmore-list"
          size="large"
          loading={initLoading}
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={displayList}
          renderItem={this.handleRenderItem}
        />
      </ListContainer>
    );
  }
}
export default BlogList;
