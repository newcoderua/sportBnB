import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
      let buddy = false;
      if ((props.location.pathname.split('becomeBuddy').length) === 2) {
        buddy = true;
      }
    this.state = {
      username: '',
      password: '',
      email: "",
      buddy: buddy,
    };
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`/`);
    }
  }

  update(field) {
    return e => {
      // console.log(field)
      this.setState({
      [field]: e.currentTarget.value
    });
  }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <span>Do not you have an account?&nbsp;
        <Link to="/signup" id="nav-link">
           Sign Up
        </Link>;
      </span>
    } else {
      return <span> Please &nbsp;
              <Link to="/login" id="nav-link">
                Log In
              </Link> &nbsp; if you have an account
            </span>;
    }
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {username: "Albert_Einstein", email: "Albi@yahoo.com", password :"654321"}}
    this.props.login(guest);
  }

  renderErrors() {
    if (this.props.errors === undefined) {
      return;
      }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // debugger
    if (this.state.buddy === false) {
      return(
        <div id="overlay">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <img src={ window.staticImages.sportBnB } className="logo-modalpage"/>
              <br/>
            <div className="login-form">
              <NavLink to="/" id="close-modal" className="button yahoo">✖️</NavLink>
              <br/>
              <label>Username:
                <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Email:
                <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input type="submit" className="button yahoo" value="Submit" />
              <br/>
              <button className="button yahoo" onClick={this.loginGuest}>Log In as Guest</button>

              <br/>
              { this.navLink() }
              { this.renderErrors()}
            </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (

        <div id="overlay">
          Hey, buddy
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <img src={ window.staticImages.sportBnB } className="logo-modalpage"/>
              <br/>
            <div className="login-form">
              <NavLink to="/" id="close-modal" className="button yahoo">✖️</NavLink>
              <br/>
              <label>Username:
                <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Email:
                <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                />
              </label>
              <br/>
              <label>Password:
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <input type="submit" className="button yahoo" value="Submit" />
              <br/>
              <button className="button yahoo" onClick={this.loginGuest}>Log In as Guest</button>

              <br/>
              { this.navLink() }
              { this.renderErrors()}
            </div>
            </form>
          </div>
        </div>
      )
    }
  }


}

export default withRouter(SessionForm);
