/* Install:
  - npm
  - react-router-dom@5.2.0 
  - firebase
to compile. */

import React from 'react';
import Navbar from './components/website/Navbar';
import './App.css';
import Main from './components/pages/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Details from './components/pages/paper/Details';
import Detail from './components/pages/paper/Detail';
import Related from './components/pages/paper/Related';
import Read from './components/pages/paper/Read';

import Account from './components/pages/user/account/Account';
import PInfo from './components/pages/user/account/PInfo';
import Subscriptions from './components/pages/user/account/Subscriptions';
import SPapers from './components/pages/user/account/SPapers';
import FormL from './components/pages/user/signup-login/FormL';
import FormS from './components/pages/user/signup-login/FormS';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/details' component={Details} /> 
          <Route path='/detail' component={Detail} />
          <Route path='/related-papers' component={Related} />
          <Route path='/read-paper' component={Read} />
          <Route path='/account' component={Account} />
          <Route path='/personal-info' component={PInfo} />
          <Route path='/subscriptions' component={Subscriptions} />
          <Route path='/saved-papers' component={SPapers} />
          <Route path='/login' component={FormL} />
          <Route path='/sign-up' component={FormS} />
        </Switch>
      </Router>
    </>
  );
}

export default App;