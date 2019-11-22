import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasicLayout from '../components/BasicLayout';
import { blogSelector } from './../../blog/selectors/blogSelector';

const mapStateToProps = null;
// (state, props) => ({
//   // users: userSelector(state)
//   blogs: blogSelector(state)
// });
const mapDispatchToProps = null;
// dispatch =>
// bindActionCreators({
// },
// dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);
