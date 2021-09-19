import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import errorActions from './actions/errorAction';
import AddImage from './components/addimage/AddImage';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/navbar/Navbar';
import PrivateGallery from './components/privategallery/PrivateGallery';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import PrivateRoute from './helper/PrivateRoute';

function App(props) {
  const { resetError } = props;

  useEffect(() => {
    resetError();
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
            <PrivateRoute path="/images" exact component={PrivateGallery} />
            <PrivateRoute path="/addimage" exact component={AddImage} />
        </Switch>
      </div>
    </div>
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
  resetError: () => { dispatch(errorActions.resetError()); }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);