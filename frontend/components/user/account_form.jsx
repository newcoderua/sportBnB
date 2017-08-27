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

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.currentUser.username,
      email: props.currentUser.email,
    }
  }

  render() {
    // debugger
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
          <div>
            <h3>Account</h3>
              {this.state.username}<br/>
              {this.state.email}
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default AccountForm;
