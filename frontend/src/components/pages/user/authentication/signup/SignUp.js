import React, { useState } from "react";
import "./SignUp.css";
import "../AuthenticationLayout.css";
import SignUpForm from "./SignUpForm";
import Success from "../Success";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitSignUp() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <SignUpForm submitForm={submitSignUp} /> : <Success />}</>
  );
};

export default SignUp;
