import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  let store = null;
  console.log('before createStore, preloadedState=',preloadedState);
  store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools({ name: 'SHELL-chris-react-blog-demo' })(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
