import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserList from '../components/UserList';
import { userSelector } from '../selectors/userSelector';
import { getAllUsers } from '../actions/apis';

const mapStateToProps = (state, props) => ({
  users: userSelector(state) || []
});
const mapDispatchToProps = null;
// dispatch =>
// bindActionCreators({
// },
// dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
