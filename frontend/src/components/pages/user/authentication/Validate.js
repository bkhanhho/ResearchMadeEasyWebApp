export default function Validate(values) {
    let errors = {};
  
    // if (!values.username.trim()) {
    //   errors.username = 'Username required';
    // }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email Address Invalid';
    }
    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more.';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password Required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords Do Not Match';
    }
    return errors;
  }