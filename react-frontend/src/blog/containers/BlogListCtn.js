import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogList from '../components/BlogList';
import { allBlogsSelector, blogCategorySelector } from '../selectors';
import { getAllBlogs, getBlogCategories } from '../api/apis';
import { setSelectedBlogId } from '../actions/RecordViewActions/recordViewAction';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
  allBlogs: allBlogsSelector(state) || [],
  blogCategories: blogCategorySelector(state) || []
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getAllBlogs, getBlogCategories, setSelectedBlogId },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
