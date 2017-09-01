import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';
import ReservationItem from './reservation_item'; // create it
import IncomingReservationContainer from './incoming_reservation_container';

class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    // this.state = { formVisible: false };
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchBuddies(this.props.filters).then(this.props.fetchReservations);
  }

  render() {
    const { reservations } = this.props;
    if ((Object.keys(this.props).length === 0) || (reservations === undefined)) {
      return null;
    }
    // debugger
    if (this.props.currentUser.buddy_id !== null) {
      <h1>Your Account</h1>
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

              <div className="not-selected-profile-link">
                <Link to="/workouts">Wish List</Link><br/><br/>
              </div>

              <div className="selected-profile-link">
                <Link to="/reservations">Reservations</Link><br/><br/>
              </div>

              </div>
            <div className="profile-navigation-content">
                <div id="incoming-reservations"><h2>Incoming Reservations</h2></div>
                <IncomingReservationContainer />
            </div>
          </div>
        </div>
        </div>
      );
    } else {
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

              <div className="not-selected-profile-link">
                <Link to="/workouts">Workouts</Link><br/><br/>
              </div>

              <div className="selected-profile-link">
                <Link to="/reservations">Reservations</Link><br/><br/>
              </div>

              </div>
            <div className="profile-navigation-content">
              <div className="header-reservation-content">
                <div className="reservations-header-account">
                  <h3>Reservations</h3>
                </div>

              </div>
                {Object.keys(this.props.reservations).reverse().map(id => (
                  <ReservationItem
                    key={id}
                    reservation={reservations[id]}
                    deleteReservation={this.props.deleteReservation}
                    buddies={this.props.buddies}
                    />
                ))}
              </div>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default ReservationIndex;
