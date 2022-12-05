import React, { useState } from "react";
import "./SignUp.css";
import SignUpForm from "./SignUpForm";
import Success from "../Success";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitSignUp() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left"></div>
      {!isSubmitted ? <SignUpForm submitForm={submitSignUp} /> : <Success />}
    </div>
  );
};

export default SignUp;
