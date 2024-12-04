import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginView() {

    function login(event) {
        navigate("/movies/genre/28");
    }
    
    return (
        <div>
            <form onSubmit={(event) => { login(event)}}>
                <button type="submit">poop</button>
            </form>
        </div>
    )
}

export default LoginView();