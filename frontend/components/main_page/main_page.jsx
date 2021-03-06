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
    // debugger
  }

  updateSport(sport) {
    return () => {
      // debugger
      this.props.updateFilter('sport', sport);
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
          Just pick sport that you interested in, date and location...
        </div>
          <br />
          <br />
          <div className="pick-sport-buttons">
              <div className="inner-pick-sport-buttons">
                <Link to="/buddies/soccer" onClick={this.updateSport("soccer")}className="button main">Soccer</Link>
                <Link to="/buddies/basketball" onClick={this.updateSport("basketball")}className="button main">Basketball</Link>
                <Link to="/buddies/box" onClick={this.updateSport("box")}className="button main">Box</Link>
                <Link to="/buddies/running" onClick={this.updateSport("running")}className="button main">Running</Link>
                <Link to="/buddies/volleyball" onClick={this.updateSport("volleyball")}className="button main">Volleyball</Link>
                <Link to="/buddies/crossfit" onClick={this.updateSport("crossfit")}className="button main">Crossfit</Link>
              </div>
          </div>
          <div className="outer-dropdown">
            <div className="dropdown">
              <button className="dropbtn">Looking for another sport ?</button>
              <div className="dropdown-content">
                <Link to="/buddies/swimming" onClick={this.updateSport("swimming")}>Swimming</Link>
                <Link to="/buddies/golf" onClick={this.updateSport("swimming")}>Golf</Link>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default MainPage;
