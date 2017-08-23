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
      <div>
      <div className="text-main-page">
        <div className="inner-text-main-page">
            SportBnB &nbsp;
            stands for Sport BODY
          and BUDDY
        <br/>
        <br/>
          Do you like SPORT? Do you want
          a great BODY?
          <br/>
          <br/>
          But working out alone is boring?
          <br/>
          <br/>
          We can find you a BUDDY(professional coach).
          <br/>
          <br/>
          Just pick sport that you interested in, date, time and location...
          <br />
          <br />
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
    );
  }
}

export default MainPage;
