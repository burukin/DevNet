import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
if(localStorage.token) {
    setAuthToken(localStorage.token);
}

const  App = ()=> {
  useEffect(()=> {
      store.dispatch(loadUser())
  }, []);

  return (
      <Provider store={store}>
          <Router>
              <Fragment>
                  <Navbar/>
                  <Route exact path="/" component={Landing}/>
                  <Route component={Routes} />
              </Fragment>
          </Router>
      </Provider>
  );
};

export default App;
