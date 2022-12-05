/* Login Page */

import React from "react";
import "../../../../../App.css";
// import Footer from '../../../website/footer/Footer';
import UseForm from "../UseForm";
import validate from "../Validate";

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h1>Access your account by filling out the information below.</h1>
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
      <button className="form-input-btn" type="submit">
        Login
      </button>
      <span className="form-input-sign-up">
        Don't already have an account? Sign Up <a href="/sign-up">HERE</a>
      </span>
    </form>
  );
};

export default Login;
