import './Header.css';

function Header() {
    
    return (
        <div className="header">
        <div className="title">Notflix</div>
        <div className="navigation">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Top Rated</a>
            <div className="dropdown">
                <button className="drop-button">Profile</button>
                <div className="drop-content">
                    <a href="#">Sign In</a>
                    <a href="#">Help</a>
                </div>
            </div>
            <button className="LogIn">
                <a href="#">Join Notflix</a>
            </button>
            </div>
        </div>
    )
}

export default Header;