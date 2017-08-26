import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/buddies" className="button yahoo">Buddies</Link>
    &nbsp;&nbsp;
    <Link to="/login" className="button yahoo">Login</Link>
    &nbsp;&nbsp;
    <Link to="/signup" className="button yahoo">SignUp</Link>
  </nav>
);


const personalGreeting = (currentUser, logout, history) => {

  const handleLogOut = () => {
    logout().then(() => history.push("/"))
  }
  return (

    <hgroup className="header-group">
      <Link to="/buddies" className="button yahoo">Buddies</Link>
      &nbsp;&nbsp;
      <button className="button yahoo" onClick={handleLogOut}>Log Out</button>
    </hgroup>
  )
};

const Greeting = ({ currentUser, logout, history }) => (
  currentUser ? personalGreeting(currentUser, logout, history) : sessionLinks()
);

export default withRouter(Greeting);
