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
import NewWorkoutFormContainer from './new_workout_form_container';


class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = { formVisible: false };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts()
    // debugger
  }

  openNewWorkoutFormContainer() {
    this.setState({ formVisible: true });
  }

  closeModal() {
    this.setState({ formVisible: false })
  }

  render() {
    const { workouts } = this.props;
    if ((Object.keys(this.props).length === 0) || (workouts === undefined)) {
      return null;
    }
    // debugger
    // <h1>Your Account</h1>
    return(
      <div className="outer-main-profile-page">
        <div className="header-account">
          <div>
          </div>
        </div>

      <div className="main-profile-page">
        <div className="container-profile">
          <div className="profile-navigation-links">
            <div className="not-selected-profile-link">
              <Link to="/users/account">Profile</Link><br/><br/><br/>
            </div>
            <div className="selected-profile-link">
              <Link to="/workouts">Wish List</Link><br/><br/>
            </div>
            <div className="not-selected-profile-link">
              <Link to="/reservations">Reservations</Link><br/><br/>
            </div>
            </div>
          <div className="profile-navigation-content">
            <div className="header-workout-content">
              <div>
                <span id="header-account-reservations"><h4>Here you can post requests for wanted workouts</h4></span>

              <span id="text-wish-list"><h4>Our community (everyBUDDY 🤣) can see your request and can accept your request</h4></span>

                <div id="account-workout-requests"><h3> History of requests </h3></div>
              </div>
              <div>
                <button className="button yahoo" onClick={this.openNewWorkoutFormContainer.bind(this)}>Post workout</button>
              </div>
            </div>
              {Object.keys(this.props.workouts).reverse().map(id => (
                <WorkoutItem
                  key={id}
                  workout={workouts[id]}
                  deleteWorkout={this.props.deleteWorkout}
                  />
              ))}
            </div>
        </div>
      </div>

      { this.state.formVisible ? <NewWorkoutFormContainer closeModal={this.closeModal} /> : null }
      </div>
    );
  }
}

export default WorkoutForm;
