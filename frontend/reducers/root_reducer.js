import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BuddiesReducer from './buddies_reducer';
import FiltersReducer from './filters_reducer';
import WorkoutReducer from './workout_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  buddies: BuddiesReducer,
  filters: FiltersReducer,
  workouts: WorkoutReducer,
});

export default RootReducer;
