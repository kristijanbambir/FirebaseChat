import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';

const rootReducer = combineReducers({
  auth,
  messages,
});

export default rootReducer;
