import './Header.css';

function Header() {

    return (
        <div class="header">
        <div class="title">Notflix</div>
        <div class="navigation">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Top Rated</a>
            <div class="dropdown">
                <button class="drop-button">Profile</button>
                <div class="drop-content">
                    <a href="#">Sign In</a>
                    <a href="#">Help</a>
                </div>
            </div>
            <button class="LogIn">
                <a href="#">Join Notflix</a>
            </button>
            </div>
        </div>
    )

}

export default Header;