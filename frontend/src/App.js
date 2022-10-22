/* Install react-router-dom@5.2.0 to compile. */

import React from 'react';
import Navbar from './components/website/Navbar';
import './App.css';
import Main from './components/pages/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Details from './components/pages/paper/Details';
import Related from './components/pages/paper/Related';
import Read from './components/pages/paper/Read';

import Account from './components/pages/user/Account';
import PInfo from './components/pages/user/PInfo';
import Subscriptions from './components/pages/user/Subscriptions';
import SPapers from './components/pages/user/SPapers';
import SignUp from './components/pages/user/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/details' component={Details} />
          <Route path='/related-papers' component={Related} />
          <Route path='/read-paper' component={Read} />
          <Route path='/account' component={Account} />
          <Route path='/personal-info' component={PInfo} />
          <Route path='/subscribe' component={Subscriptions} />
          <Route path='/saved-papers' component={SPapers} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;