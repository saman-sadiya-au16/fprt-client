import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import authActions from '../../actions/authAction'
import errorActions from '../../actions/errorAction'

const Navbar = (props) => {
    const { auth, logout } = props;

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">All images</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                {
                    auth.isLoggedIn && 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/images">My images</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/addimage">Add Image</Link>
                        </li>
                        <li className="nav-item">
                        <span className="nav-link" onClick={handleLogout}>Logout</span>
                        </li>
                    </ul>
                }
                {
                    !auth.isLoggedIn &&
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                    </ul>
                }
                </div>
            </div>
        </nav>
        </div>
    )
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
    logout: () => { dispatch(authActions.logout()); },
    toggleForm: () => { dispatch(authActions.toggleLoginForm()); },
    showLoginForm: () => { dispatch(authActions.showLoginForm())},
    hideLoginForm: () => { dispatch(authActions.hideLoginForm())},
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
