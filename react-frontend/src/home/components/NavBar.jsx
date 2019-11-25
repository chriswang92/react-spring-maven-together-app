import React, { Component, Fragment } from 'react';
import { Menu, Layout, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import SignUp from '../signUp/SignUp';
// import { ApplicationContext } from '../../context/ApplicationContext';
// import Actions from '../../context/Actions';
const { Header } = Layout;
const { SubMenu } = Menu;

class NavBar extends Component {
  //   static contextType = ApplicationContext;

  onModalClose = () => {
    // this.context.dispatch(Actions.SHOW_LOGIN_UPDATE, {
    //   showLogin: false,
    //   showRegistration: false
    // });
  };
  handleLogOut = () => {
    // this.context.dispatch(Actions.IS_USER_LOGGED_IN_UPDATE, {
    //   isUserLoggedIn: false
    // });
  };
  render() {
    return (
      <Fragment>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
            defaultSelectedKeys={[]}
            selectable={false}
          >
            <Menu.Item key="game">
              <Link to="/game">Games</Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/blog">Blogs</Link>
            </Menu.Item>
            {this.context.isUserLoggedIn ? (
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Avatar shape="square" icon="user" />
                  </span>
                }
              >
                <Menu.Item key="setting:1:profile">Profile</Menu.Item>
                <Menu.Item
                  key="setting:2:logout"
                  onClick={() => this.handleLogOut()}
                >
                  Log out
                </Menu.Item>
              </SubMenu>
            ) : (
              <Menu.Item
                key="3"
                onClick={() =>
                  //   this.context.dispatch(Actions.SHOW_LOGIN_UPDATE, {
                  //     showLogin: true,
                  //     showRegistration: false
                  //   })
                  {}
                }
              >
                <Link to="/login">Login & Signup</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        {/* <SignUp modalCloseHandler={this.onModalClose} /> */}
      </Fragment>
    );
  }
}

export default NavBar;
