import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogTable from '../components/BlogList';
import { blogSelector, blogCategorySelector } from '../selectors/blogSelector';
import { getAllBlogs, getBlogCategories } from '../actions/apis';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
  blogs: blogSelector(state) || [],
  blogCategories: blogCategorySelector(state) || []
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllBlogs, getBlogCategories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogTable);
