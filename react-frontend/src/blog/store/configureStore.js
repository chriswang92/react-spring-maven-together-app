import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas/rootSaga';

import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({ name: 'Blog' });

const configureStore = preloadState => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadState,
    compose(
      composeEnhancers(
        applyMiddleware(sagaMiddleware)
        // other store enhancers if any
      )
    )
  );

  // then run the saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
