import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasicLayout from '../components/BasicLayout';
import { blogSelector } from '../../blog/selectors';
import { selectedBlogIdSelector } from './../../blog/selectors';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
  // blogs: blogSelector(state)
  selectedBlogId: selectedBlogIdSelector(state)
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
