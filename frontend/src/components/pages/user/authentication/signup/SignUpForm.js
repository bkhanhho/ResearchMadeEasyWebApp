/* SignUp Page */

// import React from 'react';
// import '../../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'>SIGN UP</h1>;
// }

import React from "react";
import "../../../../../App.css";
// import Footer from '../../../website/footer/Footer';
import UseForm from "../UseForm";
import validate from "../Validate";

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h1>Create your account by filling out the information below.</h1>
      {/* <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
      <div className="form-inputs">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <button className="form-input-btn" type="submit">
        Sign Up
      </button>
      <span className="form-input-login">
        Already have an account? Login <a href="/login">HERE</a>
      </span>
    </form>
  );
};

export default SignUp;
