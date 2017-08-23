import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sport: "",
      best_achievement: "",
    }
  }

  render() {
    return(
      <div>
        <h1>SOMETHING TO TEST</h1>
      </div>
    );
  }
}

export default SearchForm;
