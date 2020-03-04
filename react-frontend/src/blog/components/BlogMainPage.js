import React from 'react';
import Immutable from 'immutable';
// import LoginFormCtn from '../containers/LoginFormCtn';
import BlogListCtn from '../containers/BlogListCtn';
import BlogManagePageCtn from '../containers/BlogManagePageCtn';
import '../../index.css';
import configureStore from './../store/configureStore';

let currentUser = 1;
const initialState = Immutable.Map({
  selectedBlogId: null
});
const persistedState = { blogState: initialState };
class BlogMainPage extends React.Component {
  constructor(props) {
    super(props);
    // this.store = configureStore(persistedState);
  }
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
