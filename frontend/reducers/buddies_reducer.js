import { merge } from 'lodash';

import {  RECEIVE_BUDDIES, POST_BUDDY } from '../actions/buddy_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
const BuddiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case POST_BUDDY:
      nextState = { [action.buddy.id]: action.buddy }
      return merge({}, state, nextState)
    case RECEIVE_BUDDIES:
      // nextState = {};
      return action.buddies
    // case RECEIVE_CURRENT_USER:
    //   newState = merge({}, state)
    //   // finish it
    default:
      return state;
  }
}

export default BuddiesReducer;
