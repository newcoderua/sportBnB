import * as WorkoutAPIUtil from '../util/workout_api_util';


export const FETCH_WORKOUTS = "FETCH_WORKOUTS";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const CREATE_WORKOUT = "CREATE_WORKOUT";

const receiveWorkouts = (workouts) => ({
  type: FETCH_WORKOUTS,
  workouts
});

const destroyWorkout = workout => ({
  type: DELETE_WORKOUT,
  workout
});

const postWorkout = (workout) => ({
  type: CREATE_WORKOUT,
  workout
})

export const fetchWorkouts = () => dispatch => {
  // debugger
  return (WorkoutAPIUtil.fetchWorkouts()
      .then((workouts) => dispatch(receiveWorkouts(workouts))))
};

export const createWorkout = (workout) => dispatch => (
  WorkoutAPIUtil.createWorkout(workout)
      .then((new_workout) => dispatch(postWorkout(new_workout)))
);


export const deleteWorkout = (id) => dispatch => (
  WorkoutAPIUtil.destroyWorkout(id)
      .then(workout => dispatch(destroyWorkout(workout)))
);


// also dlete and create
