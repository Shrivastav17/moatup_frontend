import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../env.js'; // Import backend URL

const NewPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const otp = queryParams.get('otp');

  console.log('Location Search:', location.search);
  console.log('Extracted OTP:', otp);
  console.log('API Endpoint:', `${url}user/reset-password`);

  if (!otp) {
    toast.error('OTP is missing. Redirecting to request OTP page...');
    setTimeout(() => navigate('/request-otp'), 2000);
    return null;
  }

  const onSubmit = async (data) => {
    const { newpassword } = data;

    try {
      const response = await fetch(`${url.apipath}user/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, userpass: newpassword }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="center-wrapper">
        <div className="form-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input
                type="password"
                placeholder="New Password"
                {...register('newpassword', {
                  required: 'Enter a new password',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                autoComplete="new-password"
              />
              {errors.newpassword && (
                <p className="error">{errors.newpassword.message}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
