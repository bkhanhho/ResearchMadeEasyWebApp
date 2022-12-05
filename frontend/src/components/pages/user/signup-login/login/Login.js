import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import Success from "../Success";

const FormL = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitFormL() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left"></div>
        {!isSubmitted ? <LoginForm submitForm={submitFormL} /> : <Success />}
      </div>
    </>
  );
};

export default FormL;
