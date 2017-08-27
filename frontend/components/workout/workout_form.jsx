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


class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger

  }

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
    // debugger
    const { workouts } = this.props;
    // debugger
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
            <Link to="/users/account">Profile</Link><br/><br/><br/>
              <Link to="/workouts">Workouts</Link><br/><br/>
            </div>
          <div className="profile-navigation-content">
              {Object.keys(this.props.workouts).map(id => (
                <WorkoutItem
                  key={id}
                  workout={workouts[id]}
                  deleteWorkout={this.props.deleteWorkout}
                  />
              ))};
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default WorkoutForm;
