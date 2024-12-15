import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from "../context/GlobalState";
import './LoginView.css';

function LoginView() {
    const { loggedIn, setLoggedIn } = useStoreContext();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        if (password === "ok") {
            setLoggedIn(true);
            setTimeout(() => {
                navigate('/movies');
            }, 0);
        } else {
            alert("Wrong password!");
        }
    }

    console.log(loggedIn);

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={(event) => {login(event)}}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required/>

                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">New to Notflix? <a href="/register">Register Now</a></p>
            </div>
        </div>
    );
}

export default LoginView;