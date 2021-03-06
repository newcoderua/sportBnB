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

  // componentDidMount() {
  //   this.props.fetchBuddy(this.props.currentUser.buddy_id)
  // }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({ imageFile: file }, () => {
      const userFormData = new FormData();
      userFormData.append("user[avatar]", this.state.imageFile);
      userFormData.append("id", this.props.currentUser.id);
      this.props.updateUser(userFormData);
      // debugger
      //
      if (this.props.currentUser.buddy_id !== 0) {
        const buddyFormData = new FormData();
        buddyFormData.append("buddy[avatar]", this.state.imageFile);
        buddyFormData.append("id", this.props.currentUser.buddy_id);
        this.props.updateBuddy(buddyFormData) // I should pass buddy
      }
    });
  }

  render() {
    // debugger
    // <h1>Your Account</h1>
    if(this.props.currentUser) {

    return(
      <div className="outer-main-profile-page">
        <div className="header-account">
          <div>
          </div>
        </div>

      <div className="main-profile-page">
        <div className="container-profile">

          <div className="profile-navigation-links">
            <div className="selected-profile-link">
              <Link to="/users/account">Profile</Link><br/><br/><br/>
            </div>
            <div className="not-selected-profile-link">
              <Link to="/workouts">Wish List</Link><br/><br/>
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
    )
  } else {
    return null
  };
  }
}

export default AccountForm;
