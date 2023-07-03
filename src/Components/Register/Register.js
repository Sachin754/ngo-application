import React, { useState } from 'react';
import './Register.css';
import Header from '../Header/Header';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = (mobileNumber) => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random OTP
    const message = `Your OTP is: ${otp}`;

    
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log('Sending OTP...');
    sendOtp(mobile);
    setIsOtpSent(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Validating OTP...');
    setIsRegistered(true);
  };

  return (
    <>
    <Header/>
    <div className="registration-form-container">
      {isRegistered ? (
        <div className="registration-success">
          <h2>Registration Successful!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Mobile: {mobile}</p>
        </div>
      ) : (
        <form className="registration-form">
          <h2>Registration Form</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Mobile:
            <input type="tel" value={mobile} onChange={handleMobileChange} />
          </label>
          {isOtpSent ? (
            <div className="otp-section">
              <label>
                OTP:
                <input type="text" value={otp} onChange={handleOtpChange} />
              </label>
              <button onClick={handleRegister}>Register</button>
            </div>
          ) : (
            <button onClick={handleSendOtp}>Send OTP</button>
          )}
        </form>
      )}
    </div>
    </>
  );
};

export default Register;
