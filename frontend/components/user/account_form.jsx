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
    // debugger
    this.state = {
      username: props.currentUser.username,
      email: props.currentUser.email,
      id: props.currentUser.id,
    }
  }

  render() {
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
            <div className="selected-profile-link">
              <Link to="/users/account">Profile</Link><br/><br/><br/>
            </div>
            <div className="not-selected-profile-link">
              <Link to="/workouts">Workouts</Link><br/><br/>
            </div>
            <div className="not-selected-profile-link">
              <Link to="/reservations">Reservations</Link><br/><br/>
            </div>
          </div>
          <div className="profile-navigation-content">
          <div>
            <div className="account-profile-header">
              <h3>Your profile info</h3>
            </div>
              <div>
                <div className="profile-navigation-content-info">
                  <div className="profile-pic-class">
                    <img src={ window.staticImages.profilePic }
                      alt="profile-pic"
                      id="profile-pic"
                      />
                  </div>
                  <div className="name-email-info-class">
                    ☞ &nbsp;{this.state.username}<br/><br/>
                    ✉︎ &nbsp;{this.state.email}
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default AccountForm;
