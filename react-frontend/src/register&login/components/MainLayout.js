
import React from 'react';
import LoginFormCtn from '../containers/LoginFormCtn';
import ContentCtn from '../containers/ContentCtn';
import RegisterFormCtn from '../containers/RegisterFormCtn';

class MainLayout extends React.Component {
  render() {
    return(
      <div id='mainlayout'>
        <RegisterFormCtn/>
        <ContentCtn />
      </div>
    );
  }
}
export default MainLayout;