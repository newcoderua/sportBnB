import { merge } from 'lodash';

import {  FETCH_WORKOUTS, DELETE_WORKOUT, CREATE_WORKOUT } from '../actions/workout_actions';

const WorkoutReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){

    case CREATE_WORKOUT:
      const new_workout = { [action.workout.id]: action.workout };
      return merge({}, state, new_workout);

    case FETCH_WORKOUTS:
      // debugger
      return action.workouts;

    case DELETE_WORKOUT:
      let newState = merge({}, state);
      delete newState[action.workout.id];
      return newState;

    default:
      return state;
  }
}

export default WorkoutReducer;
