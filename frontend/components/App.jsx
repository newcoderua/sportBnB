import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';
import { Router, hashHistory } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main_page/main_page_container';
import BuddiesFormContainer from './buddies/buddies_form_container';
import SearchFormContainer from './buddies/search_form_container';
import AccountFormContainer from './user/account_form_container';
import WorkoutContainer from './workout/workout_form_container';
import ReservationFormContainer from './reservation/reservation_form_container';
import ReservationsContainer from './reservation/reservations_container';
import BecomeBuddyContainer from './buddies/become_buddy_container';
const App = () => (
  // <Provider>
    // <Router history={hashHistory}>
      <div>
        <header  className="header-class">
            <nav className="header-nav-class">
              <div className="header-logo-class"><NavLink to="/" className="header-link">
                  <img src={ window.staticImages.sportBnB }
                    alt="logo"
                    id="logo-image"
                    />
                </NavLink>
                
              </div>
              <div className="header-buttons-class">
                <GreetingContainer />
              </div>
            </nav>
        </header>
          <Switch className="switch-class">

            <Route exact path="/login" component={SessionFormContainer} />
            <Route path="/login/:becomeBuddy" component={BecomeBuddyContainer} />
            <Route path="/signup" component={SessionFormContainer} />
            <Route exact path="/buddies/:sport" component={SearchFormContainer} />
            <Route exact path="/buddies" component={SearchFormContainer} />
            <Route path="/users/:account" component={AccountFormContainer} />
            <Route path="/workouts" component={WorkoutContainer} />
            <Route path="/reservations/:buddyId" component={ReservationFormContainer} />
            <Route path="/reservations" component={ReservationsContainer} />
            <MainPageContainer />
          </Switch>
      </div>
    // </Router>
  // </Provider>
);

export default App;
