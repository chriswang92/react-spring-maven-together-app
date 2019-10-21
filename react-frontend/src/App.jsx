import React from 'react';
import Shell from './shell';
import LoginPage from './register&login/containers/LoginFormCtn';

class App extends React.Component {
  render() {
    const { session } = this.props;
    if (session) {
      return <Shell />;
    }
    return <LoginPage />;
  }
}
export default App;
