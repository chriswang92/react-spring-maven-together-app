import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogPanel from '../../components/recordView/BlogPanel';
import { allBlogsSelector, selectedBlogIdSelector } from './../../selectors';
import { setSelectedBlogId } from '../../actions/RecordViewActions/recordViewAction';
const mapStateToProps = state => ({
  allBlogs: allBlogsSelector(state),
  selectedBlogId: selectedBlogIdSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSelectedBlogId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogPanel);
