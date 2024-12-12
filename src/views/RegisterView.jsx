import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context/GlobalState';

import "./RegisterView.css";

function RegisterView() {
    const navigate = useNavigate();

    const password = useRef('');
    const { setPass } = useStoreContext();
    const email = useRef('');
    const { setEmail } = useStoreContext();

    const confirmedPass = useRef('');

    const genres = [
        {
            genre: "Action",
            id: 28
        },
        {
            genre: "Animation",
            id: 16
        },
        {
            genre: "Crime",
            id: 80
        },
        {
            genre: "Fantasy",
            id: 14
        },
        {
            genre: "Horror",
            id: 27
        },
        {
            genre: "Mystery",
            id: 9648
        },
        {
            genre: "Music",
            id: 10402
        },
        {
            genre: "War",
            id: 10752
        },
        {
            genre: "Family",
            id: 10751
        },
        {
            genre: "Sci-Fi",
            id: 878
        },
    ]

    

    function register(event) {
        event.preventDefault();
        navigate('/login');

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

                    <label htmlFor="check-genres">Genre Options</label>
                    <input type="checkbox" id="genres" name="genres"></input>
                    
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="login-link">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default RegisterView;