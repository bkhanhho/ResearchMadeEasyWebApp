import React, { useState } from "react";
import "./Login.css";
import "../AuthenticationLayout.css";
import LoginForm from "./LoginForm";
import Success from "../Success";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitLogin() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <LoginForm submitForm={submitLogin} /> : <Success />}</>
  );
};

export default Login;
