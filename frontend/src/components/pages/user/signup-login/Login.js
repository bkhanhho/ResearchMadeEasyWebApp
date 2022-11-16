import '../../../../App.css';
import './Login.css';

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-container">
      <span className='close-btn'>×</span>
      <div className='login-content-left'>
    
      </div>
      <div className='login-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Access your account by filling out the information below.
        </h1>
        <div className='login-inputs'>
          <label className='login-label'>Email</label>
          <input
            className='login-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            // value={values.setLoginEmail}
            onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          />
        </div>
        <div className='login-inputs'>
          <label className='login-label'>Password</label>
          <input
            className='login-input'
            type='password'
            name='password'
            placeholder='Enter Password'
            // value={values.setLoginEmail}
            onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          />
        </div>
        <button className='login-input-btn' type='submit'>
          Login
        </button>
        {/* <button onClick={login}> Login</button> */}
        <span className='login-input-signup'>
          Don't already have an account? Sign Up <a href='/sign-up'>HERE</a>
        </span>
        </form>
      </div>
    </div>
  );
}

export default Login;


/*<div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Create your account by filling out the information below.
        </h1>
        <div className='form-inputs'>
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
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm Password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/login'>HERE</a>
        </span>
      </form>
      {/* <Footer />
    </div>*/