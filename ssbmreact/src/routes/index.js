import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Browse from  '../components/Browse/Browse';
import Profile from '../components/Profile/Profile';

  export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={Browse} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </Router>
  )

  