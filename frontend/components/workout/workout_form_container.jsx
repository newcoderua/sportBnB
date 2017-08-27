import { connect } from 'react-redux';
import React from 'react';
import WorkoutForm from './workout_form';
import { deleteWorkout, receiveWorkouts, createWorkout } from '../../actions/workout_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
  workouts: state.workouts,
}};

const mapDispatchToProps = dispatch => ({
  deleteWorkout: id => dispatch(deleteWorkout(id)),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  createWorkout: (workout) => dispatch(createWorkout(workout)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutForm);
