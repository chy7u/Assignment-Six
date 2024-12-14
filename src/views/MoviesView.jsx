import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import { useStoreContext } from "../context/GlobalState";
import "./MoviesView.css";

function MoviesView() {
    const { 
        genreList
    } = useStoreContext();
    
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="movies-view-container">
                <div className="main-container">
                    <aside className="genre-list">
                        <Genres genresList={genreList}/>
                    </aside>
                    <main className="genre-movies">
                        <Outlet/>
                    </main>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default MoviesView;