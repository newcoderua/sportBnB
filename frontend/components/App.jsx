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


const App = () => (
  <div>
    <header  className="header-class">
        <nav className="header-nav-class">
          <NavLink to="/" className="header-link">
            <img src={ window.staticImages.sportBnB }
              alt="logo"
              id="logo-image"
              />
          </NavLink>
          <GreetingContainer />
        </nav>
    </header>
      <Switch className="switch-class">
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
      </Switch>

  </div>
);

export default App;
