import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Landing from '../components/Landing/Landing';
import Browse from  '../components/Browse/Browse';
import Create from '../containers/CreateContainer';
import GigDetailContainer from '../containers/GigDetailContainer';
import InboxContainer from '../containers/InboxContainer';
import BrowseContainer from '../containers/BrowseContainer';
import ProfileContainer from '../containers/ProfileContainer';
import ManageGigs from '../components/ManageGigs/ManageGigs';
import Search from '../components/Search/Search';
import ReviewContainer from '../containers/ReviewContainer';
import SearchContainer from '../containers/SearchContainer';

  export default () => (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={BrowseContainer} />
            <Route path="/profile/:username" component={ProfileContainer} />
            <Route path="/create" component={Create} />
            <Route path="/detail/:id" component={GigDetailContainer} />
            <Route path="/inbox" component={InboxContainer} />
            <Route path="/manage" component={ManageGigs} />
            <Route path="/search/:search" component={SearchContainer}/>
            <Route exact path="/createreview" component={ReviewContainer}/>
            <Route path="/createreview/:id" component={ReviewContainer}/>
        </Switch>
  )

  