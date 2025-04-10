import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "../VerifyOTP/VerifyOTP.css";
import url from '../../env.js';
const VerifyOTP = () => {
  const { register, handleSubmit, setFocus } = useForm();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    const otp = Object.values(data).join(''); // Combine all input fields into a single OTP
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${url.apipath}user/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message); // Success message
        setTimeout(() => {
          // navigate('/newpassword');
          navigate(`/newpassword?otp=${otp}`); // Redirect to ResetPassword component
        }, 1000); // Add a small delay for better UX
      } else {
        setError(result.message); // Error message
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleKeyUp = (event, index) => {
    if (event.target.value.length === 1 && index < 5) {
      setFocus(`otp${index + 2}`); // Move to the next input
    }
  };

  return (
    <div className="otp-container">
      <h2>Verify your OTP</h2>
      <p>Enter the 6-digit OTP we just sent to your email</p>
      <form onSubmit={handleSubmit(onSubmit)} className="otp-form">
        <div className="otp-inputs">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                {...register(`otp${index + 1}`, { required: true })}
                onKeyUp={(e) => handleKeyUp(e, index)}
                className="otp-input"
              />
            ))}
        </div>
        <button type="submit" className="verify-button">
          Verify OTP
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="otp-links">
        <span>Resend</span>
      
      </div>
    </div>
  );
};

export default VerifyOTP;