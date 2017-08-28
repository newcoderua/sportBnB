import { connect } from 'react-redux';
import NewWorkoutForm from './new_workout_form';

// Actions
import { createWorkout } from '../../actions/workout_actions';

const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    workouts: state.workouts
}};

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(createWorkout(workout)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkoutForm);
