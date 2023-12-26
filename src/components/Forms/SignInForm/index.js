// SignInForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './styles.css';

const SignInForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
            email: '',
            password: '',
            rememberMe: false,
    });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform sign-in logic here
        console.log('Form submitted:', formData);
        navigateEmptyData();     
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
      
    };

    const navigateEmptyData = () => {
        navigate('/movies');
    }



    return (
        <div>
            <h1 className='header-label'>Sign In </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className='input'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <input
                        className='input'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="remember-me">
                    <input
                        className='input-checkbox'
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        />
                    <span className='remember-me-label'>
                    Remember Me
                    </span>
                    
                </div>
                <div>
                    <button type="submit" className='button-label'>
                       Login
                    </button>
                </div>
                
            </form>
        </div>
   
  );
};

export default SignInForm;
