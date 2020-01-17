import React from 'react';
import configureStore from '../utils/store';
import Immutable from 'immutable';
import { USER_STATE, BLOG_STATE, HOME_STATE } from '../config/constants';
import RootRouter from './RootRouter';

const userInitialState = Immutable.Map({
  users: [Immutable.Map({ id: 0, username: 'chriswang', password: 'abc12345' })]
});

const blogInitialState = Immutable.Map({
  blogs: [
    Immutable.Map({
      id: 0,
      name: 'first blog',
      content: 'first blog content'
    })
  ]
});

const homeInitialState = Immutable.Map({ currentDisplayPage: 'home' });

const persistedState = Immutable.Map({
  [USER_STATE]: userInitialState,
  [BLOG_STATE]: blogInitialState,
  [HOME_STATE]: homeInitialState
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore(persistedState);
  }

  componentDidMount() {
    // this.context.registerStore(this.store);
  }

  componentWillUnmount() {
    // unregister store
  }
  render() {
    // return <p>RootRouter</p>;
    // console.log('rendering App with store=', this.store);
    console.log(this.state);
    return <RootRouter store={this.store} />;
  }
}
export default App;
