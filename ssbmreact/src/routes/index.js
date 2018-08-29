import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Browse from  '../components/Browse';
  
  export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={Browse} />
        </Switch>
    </Router>
  )

  