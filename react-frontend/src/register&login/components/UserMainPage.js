import React from 'react';
import LoginFormCtn from '../containers/LoginFormCtn';
import UserList from '../containers/UserListCtn';
import RegisterFormCtn from '../containers/RegisterFormCtn';

class MainLayout extends React.Component {
  render() {
    return (
      <div id='mainlayout'>
        <RegisterFormCtn />
        <UserList />
      </div>
    );
  }
}
export default MainLayout;
