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

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    }
  }

  render() {
    return(
      <div id="whole-main-page">
      <div className="text-main-page">
        <div className="head-text-main-page">
            SportB(ody)nB(uddy) <br/>
          Do you like SPORT? Do you want a great BODY?
        </div>
        <div className="homepage-subtitle">
         We can find you a Buddy(professional coach).
          Just pick sport that you interested in, date, time and location...
        </div>
          <br />
          <br />
          <div className="pick-sport-buttons">
            <div className="inner-pick-sport-buttons">
              <Link to="/buddies/soccer" className="button yahoo">Soccer</Link>
              <Link to="/buddies" className="button main">Basketball</Link>
              <Link to="/buddies" className="button main">Box</Link>
              <Link to="/buddies" className="button main">American football</Link>
              <Link to="/buddies" className="button main">Running</Link>
              <Link to="/buddies" className="button main">Volleyball</Link>
            </div>
          </div>
          <div className="outer-dropdown">
            <div className="dropdown">
              <button className="dropbtn">Looking for another sport ?</button>
              <div className="dropdown-content">
                <a href="http://www.realmadrid.com/en">Soccer</a>
                <a href="#">Basketball</a>
                <a href="#">Baseball</a>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default MainPage;
