import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import url from '../../env.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import Header from '../Header/Header.js';


const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const userType = watch('type'); // Watching the select field

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${url.apipath}user/registeruser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log("data:", data);


      if (response.ok) {
        toast.success('Registration successful!');
        setTimeout(() => navigate('/'), 3000);
      } else {
        const error = await response.json();
        toast.error(error.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="center-wrapper">
        <div className="form-container mt-5">
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="text" placeholder="Name" {...register('username', { required: 'Name is required' })} />
              {errors.username && <p className="error">{errors.username.message}</p>}
            </div>

            <div className="input-group">
              <textarea
                placeholder="Description"
                {...register('description')}
                rows={4}
                style={{ resize: 'vertical' }}
              />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Website" {...register('website')} />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email ID" {...register('useremail', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
              })} />
              {errors.useremail && <p className="error">{errors.useremail.message}</p>}
            </div>

            <div className="input-group">
              <input type="text" placeholder="Specialties" {...register('specialties')} />
            </div>

            <div className="input-group">
              <select {...register('type', { required: 'Please select a type' })}>
                <option value="">Select Type</option>
                <option value="Investor">Investor</option>
                <option value="Corporate">Corporate</option>
              </select>
              {errors.type && <p className="error">{errors.type.message}</p>}
            </div>

            {userType === 'Corporate' && (
              <>
                <div className="input-group">
                  <input type="text" placeholder="Industry" {...register('industry', { required: 'Industry Name is required for Corporate' })} />
                  {errors.industry && <p className="error">{errors.industry.message}</p>}
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Company Size" {...register('companySize', { required: 'Company Size is required for Corporate' })} />
                  {errors.companySize && <p className="error">{errors.companySize.message}</p>}
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Company Type" {...register('companyType', { required: 'Company Type is required for Corporate' })} />
                  {errors.companyType && <p className="error">{errors.companyType.message}</p>}
                </div>
              </>
            )}

            <div className="input-group">
              <input type="password" placeholder="Password" {...register('userpass', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Minimum 6 characters' }
              })} autoComplete="new-password" />
              {errors.userpass && <p className="error">{errors.userpass.message}</p>}
            </div>

            <button type="submit" className="submit-button">Register</button>
            <span className="acc">Already have an account? <Link to="/">Log In</Link></span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;