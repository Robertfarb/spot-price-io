import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/set_auth_token';
import { setCurrentUser, logoutUser } from './actions/auth_actions';
import { ProtectedRoute, AuthRoute } from './util/route_util';

import NavBar from "./components/universal/Navbar";
import Footer from "./components/universal/Footer";
import Landing from "./components/universal/Landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import LiveFeed from "./components/liveFeed";
import './App.css';

if (localStorage.jwtToken) {
  const jwtToken = localStorage.jwtToken;

  setAuthToken(jwtToken);
  const decoded = jwt_decode(jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div className="main-content">
              <AuthRoute exact path="/" component={Login} />
              <AuthRoute exact path="/register" component={Register} />
              <AuthRoute exact path="/login" component={Login} />
              <ProtectedRoute exact path="/live-feed" component={LiveFeed} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;