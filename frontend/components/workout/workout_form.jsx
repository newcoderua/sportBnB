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
            <div className="not-selected-profile-link">
              <Link to="/reservations">Reservations</Link><br/><br/>
            </div>
            </div>
          <div className="profile-navigation-content">
            <div className="header-workout-content">
              <div>
                <h4>Let's say you want to workout, but</h4><br />
                - you do not know how to pick buddy<br />
                - or there are no available buddies for now<br />
                - or you want some random buddy to workout with you<br />
                - etc. <br />
              <h4>You can post workout so our community (everybuddy 🤣) can see your post and can accept your request</h4>
                <h3> Workout's requests </h3><br />
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
