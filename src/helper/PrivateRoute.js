import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authActions from "../actions/authAction";
import errorActions from "../actions/errorAction";


function PrivateRoute({ component: Component, ...rest }) {
    const { auth } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLoggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
    const { auth, error } = state;
    return {
        auth,
        error
    }
  };
  
  const mapDispatchToProps = (dispatch) => ({
    resetError: () => { dispatch(errorActions.resetError()); },
    logout: () => { dispatch(authActions.logout()); }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);