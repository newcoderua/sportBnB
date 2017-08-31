import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BuddiesReducer from './buddies_reducer';
import FiltersReducer from './filters_reducer';
import WorkoutReducer from './workout_reducer';
import ReservationReducer from './reservation_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  buddies: BuddiesReducer,
  filters: FiltersReducer,
  workouts: WorkoutReducer,
  reservations: ReservationReducer,
  users: UsersReducer,
});

export default RootReducer;
