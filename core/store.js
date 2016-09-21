import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const logger = createLogger();
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    logger,
    thunkMiddleware
  ),
);

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
  });
}, 1000));

export default store;
