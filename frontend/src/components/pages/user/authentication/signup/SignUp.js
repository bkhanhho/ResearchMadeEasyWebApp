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
    <div>
      {!isSubmitted ? <SignUpForm submitForm={submitSignUp} /> : <Success />}
    </div>
  );
};

export default SignUp;
