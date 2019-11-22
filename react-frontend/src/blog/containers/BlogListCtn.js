import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogTable from '../components/BlogList';
import { blogSelector } from '../selectors/blogSelector';
import { getAllBlogs } from '../actions/apis';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
  blogs: blogSelector(state) || []
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllBlogs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogTable);
