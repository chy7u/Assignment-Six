import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    
    return (
        <div className="header">
            <div className="title">Notflix</div>
            <div className="navigation">
                <Link to={`/`} className="button">Home</Link>
                <div className="dropdown">
                    <button className="drop-button">Profile</button>
                    <div className="drop-content">
                        <Link to={`/login`} className="button">Sign In</Link>
                        <a href="#">Help</a>
                    </div>
                </div>
                <button className="Register">
                    <Link to={`/register`} className="button">Join Notflix</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;