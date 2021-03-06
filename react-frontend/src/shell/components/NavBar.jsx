import React, { Component } from 'react';
import { Menu, Layout, Avatar } from 'antd';
import { Link } from 'react-router-dom';
// import SignUp from '../signUp/SignUp';
// import { ApplicationContext } from '../../context/ApplicationContext';
// import Actions from '../../context/Actions';
const { Header, Content, Footer } = Layout;
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
  handleClick = ({ item, key, keyPath, domEvent }) => {
    const { selectedBlogId, setSelectedBlogId } = this.props;
    console.log(selectedBlogId);
    if (selectedBlogId) setSelectedBlogId(null);
  };
  render() {
    return (
      <>
        <Header>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
            defaultSelectedKeys={[]}
            selectable={false}
            onClick={this.handleClick}
          >
            <Menu.Item key="home">
              <Link to="/home">Home</Link>
            </Menu.Item>
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
              <Menu.Item key="3">
                <Link to="/login">Login & Signup</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        {/* <SignUp modalCloseHandler={this.onModalClose} /> */}
      </>
    );
  }
}

export default NavBar;
