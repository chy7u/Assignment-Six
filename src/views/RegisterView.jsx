import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context/GlobalState';
import "./RegisterView.css";

function RegisterView() {
    const { 
        setFirst, 
        setLast, 
        setEmail, 
        setPass, 
        setGenres,
        setList
    } = useStoreContext();

    const navigate = useNavigate();

    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const password = useRef('');
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

    const checkBoxesRef = useRef({});

    //on submit
    function register(event) {
        event.preventDefault();

        const selectedGenres = Object.keys(checkBoxesRef.current)
        .filter((genreId) => checkBoxesRef.current[genreId].checked)
        .map(Number); // convert string ids to number

        if (selectedGenres.length < 10) {
            alert("You need at least 10 genres!");
            return;
        }

        if (confirmedPass.current.value != password.current.value) {
            alert("Your passwords don't match!");
            return;
        }

        setFirst(firstName.current.value);
        setLast(lastName.current.value);
        setEmail(email.current.value);
        setPass(password.current.value);
        setGenres(selectedGenres);

        navigate('/login');
    }

    return(
        <div className="register-container">
            <div className="form-container">
                <h2>Create an Account</h2>
                <form action="#" method="POST" onSubmit={(event) => {register(event) }}>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        placeholder="First Name"
                        ref={firstName} 
                        required />
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        placeholder="Last Name"
                        ref={lastName} 
                        required />
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Email" 
                        ref={email} 
                        required />
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        ref={password} 
                        required />
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        placeholder="Confirm Password" 
                        ref={confirmedPass} 
                        required />

                    <label htmlFor="check-genres">Genre Options:</label>
                    <div className="genresList">
					    {genres.map((item) => {
                            //maps through each genre item and creates checkbox
					    	return (
					    		<label key={item.id}>
					    			<input 
					    			type='checkbox' 
					    			id="check"
					    			ref={(el) => (checkBoxesRef.current[item.id] = el)}
					    			/> {item.genre}
					    		</label>
					    	);
					    })}
				    </div>
                    
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="login-link">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default RegisterView;