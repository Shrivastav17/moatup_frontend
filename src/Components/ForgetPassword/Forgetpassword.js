import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import url from '../../env.js';
import "./ForgetPassword.css"
import Header from '../Header/Header.js';
const Forgetpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [msg, setMsg] = useState(''); // Message for success or error
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the backend API
      const response = await fetch(`${url.apipath}user/forgot-password`, { // Fixed backtick issue
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ useremail: data.useremail }),
      });

      if (response.ok) {
        const result = await response.json();
        setMsg('OTP has been sent to your email address.');

        // Redirect to the Verify component and pass the useremail as state
        navigate('/verifyotp', { state: { useremail: data.useremail } });
      } else {
        const errorData = await response.json();
        setMsg(errorData.message || 'Something went wrong.');
      }
    } catch (error) {
      setMsg('Unable to send OTP. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* <div className="center-wrapper">
        <div className="form-container">
          <h2>Forget Your Password</h2>
          <p className="para">Enter registered email. We will send a six-digit OTP.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Id"
                {...register('useremail', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
              />
              {errors.useremail && <p className="error">{errors.useremail.message}</p>}
            </div>

            <button type="submit" className="submit-button">Send OTP</button>
            <div className="links-container">
              <span className="acc">
                <Link to="/">LogIn</Link>
              </span>
            </div>
          </form>
          {msg && <p className="message">{msg}</p>}
        </div>
      </div> */}

<Header></Header>
      <div className="forget-wrapper">
        <div className="forget-container">
          <h2 className="forget-title">Forget Your Password</h2>
          <p className="forget-subtitle">Enter registered email. We will send a six-digit OTP.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="forget-form">
            <div className="forget-input-group">
              <input
                type="email"
                placeholder="Email Id"
                {...register('useremail', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className="forget-input"
              />
              {errors.useremail && <p className="forget-error">{errors.useremail.message}</p>}
            </div>

            <button type="submit" className="forget-submit-button">Send OTP</button>

            <div className="forget-links">
              <span className="forget-login-link">
                <Link to="/">LogIn</Link>
              </span>
            </div>
          </form>

          {msg && <p className="forget-message">{msg}</p>}
        </div>
      </div>


    </>
  );
};

export default Forgetpassword;