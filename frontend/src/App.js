/* Install:
  - npm
  - react-router-dom@5.2.0 
  - firebase
to compile. */

import React from "react";
import Navbar from "./components/website/header/Navbar";
import "./App.css";
import Main from "./components/pages/home/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Paper from "./components/pages/paper/Paper";
import Related from "./components/pages/paper/Related";
import Read from "./components/pages/paper/Read";

import Account from "./components/pages/user/account/Account";
import PersonalInfo from "./components/pages/user/account/personal-info/PersonalInfo";
import FormL from "./components/pages/user/signup-login/FormL";
import FormS from "./components/pages/user/signup-login/FormS";
import SavedPapers from "./components/pages/user/account/saved-papers/SavedPapers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="paper/:paperId" element={<Paper />} />
          <Route path="related-papers" element={<Related />} />
          <Route path="read-paper" element={<Read />} />
          <Route path="account" element={<Account />}>
            <Route index element={<PersonalInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="saved-papers" element={<SavedPapers />} />
          </Route>
          <Route path="login" element={<FormL />} />
          <Route path="sign-up" element={<FormS />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
