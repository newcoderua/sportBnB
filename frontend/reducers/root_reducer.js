import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BuddiesReducer from './buddies_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  buddies: BuddiesReducer,
});

export default RootReducer;
