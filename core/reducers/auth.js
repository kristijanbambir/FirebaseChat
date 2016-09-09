import { SIGN_IN, SIGN_OUT } from '../actions/auth';

const auth = (state = {
  user: null,
}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        user: action.user,
      });
    case SIGN_OUT:
      return Object.assign({}, state, {
        user: null,
      });
    default:
      return state;
  }
};

export default auth;
