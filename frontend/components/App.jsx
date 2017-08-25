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

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main_page/main_page_container';
import BuddiesFormContainer from './buddies/buddies_form_container';
import SearchFormContainer from './buddies/search_form_container';

const App = () => (
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
        <Route exact path="/buddies" component={SearchFormContainer} />
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
        <Route exact path="/buddies/:sport" component={SearchFormContainer} />
        <MainPageContainer />
      </Switch>
  </div>
);

export default App;
