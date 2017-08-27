import * as WorkoutAPIUtil from '../util/workout_api_util';


export const FETCH_WORKOUTS = "FETCH_WORKOUTS";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const CREATE_WORKOUT = "CREATE_WORKOUT";

export const receiveWorkouts = () => ({
  type: FETCH_WORKOUTS
});

export const deleteWorkout = workout => ({
  type: DELETE_WORKOUT,
  workout
});

export const createWorkout = (workout) => ({
  type: CREATE_WORKOUT,
  workout
})

export const fetchWorkouts = () => dispatch => (
  WorkoutAPIUtil.fetchWorkouts()
      .then((workouts) => dispatch(receiveWorkouts(workouts)))
);

export const createWorkout = (workout) => dispatch => (
  WorkoutAPIUtil.createWorkout(workout)
      .then((new_workout) => dispatch(createWorkout(new_workout)))
);


export const deleteWorkout = (id) => dispatch => (
  WorkoutAPIUtil.destroyWorkout(id)
      .then(workout => dispatch(deleteWorkout(workout)))
);


// also dlete and create
