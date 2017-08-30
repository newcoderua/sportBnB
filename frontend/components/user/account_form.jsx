import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';


class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      // username: props.currentUser.username,
      // email: props.currentUser.email,
      // id: props.currentUser.id,
      // image_url: props.currentUser.image_url,
      imageFile: null,
      image_url: null,
      body: "",

    }
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    this.setState({ imageFile: file }, () => {
      var formData = new FormData();
      formData.append("user[avatar]", this.state.imageFile);
      formData.append("id", this.props.currentUser.id);
      this.props.updateUser(formData);
    });
  }

  render() {
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
                    <img src={this.props.currentUser.image_url} id="profile-pic"/>
                    <input type="file" onChange={this.updateFile.bind(this)} />
                  </div>



                  <div className="name-email-info-class">
                    ☞ &nbsp;{this.props.currentUser.username}<br/><br/>
                  ✉︎ &nbsp;{this.props.currentUser.email}<br />
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
