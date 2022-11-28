import React, { useState } from 'react';
import './FormL.css';
import Login from './Login';
import Success from './Success';

const FormL = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitFormL() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        </div>
        {!isSubmitted ? (
          <Login submitForm={submitFormL} />
        ) : (
          <Success />
        )}
      </div>
    </>
  );
};

export default FormL;