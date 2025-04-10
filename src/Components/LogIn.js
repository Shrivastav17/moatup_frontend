import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import url from '../env.js';
import Header from './Header/Header.js';


const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${url.apipath}user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    useremail: data.useremail,
                    userpass: data.password,
                }),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log("JWT Token:", result.token);
                localStorage.setItem("token", result.token);
    
                toast.success(result.message || 'Login successful!');
    
                // 👇 Redirect based on user type
                const userType = result.user?.type;
    
                setTimeout(() => {
                    if (userType === "Investor") {
                        navigate('/home');
                    } else if (userType === "Corporate") {
                        navigate('/corporate_home');
                    }
                }, 2000);
            } else {
                toast.error(result.msg || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.log("Error:", error);
            toast.error('An error occurred while logging in.');
        }
    };

    return (
        <>
            {/* Toastify Container for notifications */}
            <ToastContainer />
            <Header></Header>
            <div className="center-wrapper">
                <div className="form-container">
                    <h2>LogIn</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email Id"
                                {...register('useremail', {
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                })}
                                autoComplete="current-password"
                            />
                            {errors.useremail && <p className="error">{errors.useremail.message}</p>}
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                                })}
                            />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>

                        <button type="submit" className="submit-button">Log In</button>
                        <div className="links-container">
                            <span className="acc">
                                Don't have an account? <Link to="/register">Register</Link>
                            </span>
                            <span className="accs">
                                <Link to="/forgetpassword">Forget Password?</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogIn;