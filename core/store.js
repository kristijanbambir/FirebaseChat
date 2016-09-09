import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunkMiddleware
  ),
);

export default store;
