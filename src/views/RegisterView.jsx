import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context';

import "./RegisterView.css";

function RegisterView() {
    const password = useRef('');
    const email = useRef('');
    const confirmedPass = useRef('');
    const navigate = useNavigate();
    const { setEmail } = useStoreContext();
    const { setPass } = useStoreContext();

    function register(event) {
        event.preventDefault();
        navigate('/');

        setEmail(email.current.value);
        setPass(password.current.value);
    }

    function confirmPass(event) {
        event.preventDefault();
    }

    return(
        <div className="register-container">
            <div className="form-container">
                <h2>Create an Account</h2>
                <form action="#" method="POST" onSubmit={(event) => {register(event) }}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="firstName" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="lastName" id="lastName" name="lastName" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" ref={email} required />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={password} required />
                    
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" ref={confirmedPass} required />
                    
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="login-link">Already have an account? <a href="#">Login</a></p>
            </div>
        </div>
    );
}

export default RegisterView;