import { RECEIVE_BUDDIES
} from '../actions/search_actions';
import merge from 'lodash/merge';



const BuddiesReducer = (state = {}, action ) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_BUDDIES:
      return action.type;
    default:
      return state;
  }
};


export default BuddiesReducer;
