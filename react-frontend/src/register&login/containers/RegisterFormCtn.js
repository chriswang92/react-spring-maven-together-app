

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser, getAllUsers} from '../actions/apis';
import LoginOrRegisterForm from '../components/LoginOrRegisterForm';
import { userSelector } from '../selectors/userSelector';

const mapStateToProps = (state,props)=>({
  isLogin: false,
  users: userSelector(state)
});
const mapDispatchToProps = dispatch => 
bindActionCreators({
  registerUser,
  getAllUsers
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegisterForm);