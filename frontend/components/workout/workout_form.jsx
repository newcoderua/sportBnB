import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';

// import SearchForm '../search_form/search_form_container';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      username: props.currentUser.username,
      email: props.currentUser.email,
    }
  }

  render() {
    // debugger
    // debugger
    return(
      <div>
        <h1>Your profile page</h1><br/>

        {this.state.username}<br/>
        {this.state.email}
        <br />
        <br />
        <br />
        <Link to="/workouts" className="button yahoo">Create you desirable workout</Link>
      </div>
    );
  }
}

export default WorkoutForm;
