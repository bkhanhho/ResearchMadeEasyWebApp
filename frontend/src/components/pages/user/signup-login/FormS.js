import React, { useState } from 'react';
import './FormS.css';
import SignUp from './SignUp';
import Success from './Success';

const FormS = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitFormS() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        </div>
        {!isSubmitted ? (
          <SignUp submitForm={submitFormS} />
        ) : (
          <Success />
        )}
      </div>
    </>
  );
};

export default FormS;