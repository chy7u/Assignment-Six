import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import { useContext } from 'react';
import { StoreProvider } from "../context/GlobalState";
import "./MoviesView.css";

function MoviesView() {
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

    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="movies-view-container">
                <div className="main-container">
                    <aside className="genre-list">
                        <Genres genresList={genres}/>
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