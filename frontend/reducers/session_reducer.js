import { RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        CLEAR_ERRORS,
        RECEIVE_BUDDIES } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
})

const SessionReducer = (state = nullUser, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
      case RECEIVE_ERRORS:
        const errors = action.errors;
        return merge({}, nullUser, {
          errors
        });
      case CLEAR_ERRORS:
        return merge({}, state, {
          errors : []
        });
      case RECEIVE_BUDDIES:
        return action.buddies;
    default:
      return state;
  }
};


export default SessionReducer;
