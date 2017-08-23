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
          <div class="dropdown">
            <button class="dropbtn">Looking for another sport ?</button>
              <div class="dropdown-content">
                <a href="#">Soccer</a>
                <a href="#"></a>
                <a href="#">Link 3</a>
          </div>
          </div>
      </div>
    );
  }
}

export default MainPage;
