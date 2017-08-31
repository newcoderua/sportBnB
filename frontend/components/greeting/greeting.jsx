import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const sessionLinks = () => {
  // debugger
  return (
  <nav className="login-signup">
    <Link to="/buddies" className="button yahoo">Buddies</Link>
    &nbsp;&nbsp;
    <Link to="/login" className="button yahoo">Login</Link>
    &nbsp;

  </nav>
)};


const personalGreeting = (currentUser, logout, history) => {

  const handleLogOut = () => {
    logout().then(() => history.push("/"))
  }
  // debugger
    if (currentUser.buddy_id !== 0 ) {
      return (

        <hgroup className="header-group">
        
          <Link to="/buddies" className="button yahoo">Buddies</Link>
          &nbsp;&nbsp;
          <Link to="/users/account" className="button yahoo">Account</Link>
            &nbsp;&nbsp;
          <button className="button yahoo" onClick={handleLogOut}>Log Out</button>
        </hgroup>
      )
    } else {
      return (

        <hgroup className="header-group">
          <Link to="/login/becomeBuddy" className="become-buddy-button">Become a buddy</Link>
          &nbsp;&nbsp;
          <Link to="/buddies" className="button yahoo">Buddies</Link>
          &nbsp;&nbsp;
          <Link to="/users/account" className="button yahoo">Account</Link>
            &nbsp;&nbsp;
          <button className="button yahoo" onClick={handleLogOut}>Log Out</button>
        </hgroup>
      )
  }
};

const Greeting = ({ currentUser, logout, history }) => (
  currentUser ? personalGreeting(currentUser, logout, history) : sessionLinks()
);

export default withRouter(Greeting);
// <Link to="/login/becomeBuddy" className="button yahoo"  >Become a buddy</Link>
// &nbsp;
