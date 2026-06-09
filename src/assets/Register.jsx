import React from 'react';
import './Register.css';

const Register = ({ switchToLogin, backToHome }) => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form className='register-form'>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <h2>Already have an account? <button onClick={switchToLogin} className='back-btn'>Login</button></h2>
      <button onClick={backToHome} className="back-btn">Back to Home</button>
    </div>
  );
};
export default Register;