import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Browse from  '../components/Browse/Browse';
import Profile from '../components/Profile/Profile';
import Create from '../containers/CreateContainer';
import GigDetailContainer from '../containers/GigDetailContainer';

  export default () => (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={Browse} />
            <Route path="/profile" component={Profile} />
            <Route path="/create" component={Create} />
            <Route path="/detail" component={GigDetailContainer} />
        </Switch>
  )

  