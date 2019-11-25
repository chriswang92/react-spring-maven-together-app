import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogManagePage from '../components/BlogManagePage';
import { addBlog, getBlogCategories } from '../actions/apis';
import { blogCategorySelector } from '../selectors/blogSelector';

const mapStateToProps = (state, props) => ({
  blogCategories: blogCategorySelector(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addBlog, getBlogCategories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogManagePage);
