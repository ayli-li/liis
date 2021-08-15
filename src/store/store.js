import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  
  return {
      ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
  };
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;