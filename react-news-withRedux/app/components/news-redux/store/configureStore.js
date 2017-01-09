import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/NewsReducer';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState,devToolsExtension){
  const store = createStoreWithMiddleware(rootReducer,initialState,devToolsExtension);

  if(module.hot){
    module.hot.accept('../reducer/NewsReducer', () => {
      const nextReducer = require('../reducer/NewsReducer');
      store.replaceReducer(nextReducer)
    });
  }

  return store;
}
