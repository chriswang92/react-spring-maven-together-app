

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../actions/apis';
import LoginOrRegisterForm from '../components/LoginOrRegisterForm';
import { userSelector } from '../selectors/userSelector';


const mapStateToProps = (state,props)=>({
  isLogin:true,
  registeredUsers: userSelector(state)
});
const mapDispatchToProps = dispatch => 
bindActionCreators({
  registerUser
},
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegisterForm);