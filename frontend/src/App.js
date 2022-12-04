/* Install:
  - npm
  - react-router-dom@5.2.0 
  - firebase
to compile. */

import React from "react";
import Navbar from "./components/website/header/Navbar";
import "./App.css";
import Main from "./components/pages/home/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Paper from "./components/pages/paper/Paper";
import Related from "./components/pages/paper/Related";
import Read from "./components/pages/paper/Read";

import Account from "./components/pages/user/account/Account";
import PInfo from "./components/pages/user/account/PInfo";
import FormL from "./components/pages/user/signup-login/FormL";
import FormS from "./components/pages/user/signup-login/FormS";
import SavedPapers from "./components/pages/user/account/saved-papers/SavedPapers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/paper/:paperId" component={Paper} />
          <Route path="/related-papers" component={Related} />
          <Route path="/read-paper" component={Read} />
          <Route path="/account" component={Account} />
          <Route path="/personal-info" component={PInfo} />
          <Route path="/saved-papers2" component={SavedPapers} />
          <Route path="/login" component={FormL} />
          <Route path="/sign-up" component={FormS} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
