import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import BlogTableCtn from '../containers/BlogTableCtn';
import '../index.css';

class BasicLayout extends React.Component {
  render() {

    return (
      <div id='homePage'>
        <h1>Welcome to chriswcg 's Home page</h1>
        <Link to='/login'><Button>login</Button></Link> 
        <Link to='/register'><Button>register</Button></Link> 
        <Link to='/game'><Button>Games</Button></Link>
        <BlogTableCtn />
      </div>
    );
  }
}
export default BasicLayout;