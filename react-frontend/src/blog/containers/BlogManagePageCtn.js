import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogManagePage from '../components/BlogManagePage';
import { addBlog } from '../actions/apis';

const mapStateToProps = null;
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addBlog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogManagePage);
