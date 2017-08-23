import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';

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
        <div>
          <h3>
            <b>SportBnB</b>&nbsp;
            stands for Sport <b>BODY</b>
          and <b>BUDDY</b>
        <br/>
          Do you like SPORT? Do you want
          a great BODY?
          <br/>
          But working out alone is boring?
          <br/>
          We can find you a BUDDY(professional coach).
          <br/>
          Just pick sport that you interested in, date, time and location...
          </h3>
          </div>
      </div>
    );
  }
}

export default MainPage;
