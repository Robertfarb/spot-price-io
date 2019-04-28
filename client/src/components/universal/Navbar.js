import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth_actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(this.props.auth.user.role === "Admin");

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/live-feed">
            Live Spot Prices
          </Link>
        </li>
        <li className="nav-item">
          <button id="logout-button" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    const adminLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/live-feed">
            Live Spot Prices
          </Link>
        </li>
        <li className="nav-item">
          <button id="logout-button" onClick={this.onLogoutClick.bind(this)} className="nav-link">Logout</button>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotPrice
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
              </ul>
              {/* TODO: Correct logic for authLinks vs. adminLinks rendering */}
              {isAuthenticated ? authLinks : adminLinks}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);
