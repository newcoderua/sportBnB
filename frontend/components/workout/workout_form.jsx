import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';
import WorkoutItem from './workout_item';
import NewWorkoutForm from './new_workout_form';


class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formVisible: false };
  }

  componentDidMount() {
    this.props.fetchWorkouts()
    // debugger
  }

  openNewWorkoutForm() {
    this.setState({ formVisible: true });
  }

  render() {
    const { workouts } = this.props;
    if ((Object.keys(this.props).length === 0) || (workouts === undefined)) {
      return null;
    }
    // debugger
    return(
      <div className="outer-main-profile-page">
        <div className="header-account">
          <div>
            <h1>Your Account</h1>
          </div>
        </div>

      <div className="main-profile-page">
        <div className="container-profile">
          <div className="profile-navigation-links">
            <div className="not-selected-profile-link">
              <Link to="/users/account">Profile</Link><br/><br/><br/>
            </div>
            <div className="selected-profile-link">
              <Link to="/workouts">Workouts</Link><br/><br/>
            </div>
            </div>
          <div className="profile-navigation-content">
            <div className="header-workout-content">
              <div>
                <h3>Workouts</h3>
              </div>
              <div>
                <button className="button yahoo" onClick={this.openNewWorkoutForm.bind(this)}>Post workout</button>
              </div>
            </div>
              {Object.keys(this.props.workouts).map(id => (
                <WorkoutItem
                  key={id}
                  workout={workouts[id]}
                  deleteWorkout={this.props.deleteWorkout}
                  />
              ))}
            </div>
        </div>
      </div>

        { this.state.formVisible ? <NewWorkoutForm createWorkout={this.props.createWorkout} /> : null }
      </div>
    );
  }
}

export default WorkoutForm;
