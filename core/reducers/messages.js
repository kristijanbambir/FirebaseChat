import { RECEIVE_MESSAGES } from '../actions/messages';

const messages = (state = {
  values: [],
}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        values: action.messages,
      });
    default:
      return state;
  }
};

export default messages;
