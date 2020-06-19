import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './Profile/Profile';
import './Common/styles/Utilities.scss';

import logo from './logo.svg';
import './App.css';
import './Common/styles/Grid.scss'
import './Common/styles/Tabs.scss';
import './Common/styles/Header.scss';
import './Profile/profile.scss';

import Header from "./Common/Header";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/profile/:userName"  children={<Profile />}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
