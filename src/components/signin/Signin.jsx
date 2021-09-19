import React, { useState } from 'react'
import { connect } from 'react-redux';
import authActions from '../../actions/authAction';
import errorActions from '../../actions/errorAction';

function Signin(props) {
    const { resetError, auth, error} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginUser = (e) => {
        const { loginUser } = props;
        e.preventDefault();
        console.log({ email, password });
        loginUser(email, password);
    }

    const handleToggle = (e) => {
        const { toggleForm } = props;
        toggleForm();
    }


    return (
    <>
    {
      error.isSet && (
          <div className="alert alert-danger mt-5" role="alert">
            {error.message}
          </div>
      )
    }
    {
      auth.accountCreated && !auth.isLoading && !auth.isLoggedIn && (
        <div className="alert alert-success mt-5" role="alert">
          Account created successfully!
        </div>
      )
    }
    {
      auth.isLoading && (
        <div className="alert alert-primary mt-5" role="alert">
          Loading... Please Wait!
        </div>
      )
    }
        <div className="row">
            <div className="col-10 col-sm-8 col-md-8 col-lg-6 col-xl-6 mx-auto mt-5">
                <h3 className="text-right mt-5 mb-5">Welcome to Gallery App</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange={(e) => { setEmail(e.target.value); resetError(); } } 
                        required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                        onChange={(e) => { setPassword(e.target.value); resetError(); }}
                        />
                    </div>
                    <button type="submit" disabled={auth.isLoading} className="btn btn-primary btn-lg mr-3" onClick={handleLoginUser}>Submit</button>
                    <button type="button" className="btn btn-light btn-lg" onClick={handleToggle}>Signup</button>
                </form>
            </div>
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
    const { auth, error } = state;
    return {
        auth,
        error
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, password) => { dispatch(authActions.loginUser(email, password)); },
    resetError: () => { dispatch(errorActions.resetError()); },
    toggleForm: () => { dispatch(authActions.toggleLoginForm()); },
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin);