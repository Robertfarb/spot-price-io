import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/live-feed" />
      )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )} />
);

const Admin = ({ component: Component, path, loggedIn, user, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        (user.role === "Admin") ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  };

const mapStateToProps = state => ({
  loggedIn: state.auth.isAuthenticated,
  user: state.auth.user,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AdminRoute = withRouter(connect(mapStateToProps)(Admin));