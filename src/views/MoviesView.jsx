import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
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
            genre: "TV",
            id: 10770
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
        <div className="app-container">
            <Header/>
            <div className="genre-container">
                <div className="genre-list">
                    <Genres genresList={genres}/>
                </div>
                <div className="genre-movies">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MoviesView;