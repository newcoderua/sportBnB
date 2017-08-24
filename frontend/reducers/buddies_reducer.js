import { merge } from 'lodash';

import {  RECEIVE_BUDDIES } from '../actions/buddy_actions';

const BuddiesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    // case RECEIVE_BUDDY:
    //   const buddy = action.buddy;
    //   return merge({}, state, {[buddy.id]: buddy});
    case RECEIVE_BUDDIES:
      return action.chefs;
    default:
      return state;
  }
}

export default BuddiesReducer;
