import { RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS,
        CLEAR_ERRORS,
        RECEIVE_BUDDIES
        } from '../actions/session_actions';
import { POST_BUDDY } from '../actions/buddy_actions';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
})

const SessionReducer = (state = nullUser, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case POST_BUDDY:
      newState = merge({}, state)
      newState.currentUser.buddy_id = action.buddy.id
      newState.currentUser.image_url = action.buddy.image_url
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    
    case CLEAR_ERRORS:
      return merge({}, state, {
        errors : []
      });
  default:
    return state;
  }
};


export default SessionReducer;
