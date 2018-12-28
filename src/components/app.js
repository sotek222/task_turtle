import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import { Route,  HashRouter as Router } from 'react-router-dom';
import Landing from '../containers/Landing';
import UserProfile from '../containers/UserProfile';
import Authenticated_Routes from '../containers/Authenticated_Routes';


function App() {
  return (
    <Router>
     <div>
     <Authenticated_Routes />
     <Route exact path="/UserProfile" component={UserProfile} />
     </div>
    </Router>
    );
};

export default hot(App);
