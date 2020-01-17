import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../components/NavBar';
import { blogSelector } from '../../blog/selectors';
import { setSelectedBlogId } from '../../blog/actions/RecordViewActions/recordViewAction';

const mapStateToProps = (state, props) => ({
  // users: userSelector(state)
  // blogs: blogSelector(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setSelectedBlogId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
