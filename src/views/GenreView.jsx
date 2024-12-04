import Genres from "../components/Genres";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import "./GenreView.css";

function GenreView() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const genreNames = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      80: "Comedy",
      18: "Drama",
      36: "Horror",
      9648: "Mystery",
      14: "Fantasy",
      10402: "Music",
      53: "Thriller",
  };
  const x = genreNames[id];
  console.log(genreNames[14]);
  console.log(x);

  useEffect(() => {
      async function getMovies() {
          const response = await axios.get(
              `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${id}&page=${page}`
          );
          console.log(response.data.results);
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages);
      }
      getMovies();

  }, [id, page]);

  function nextPage() {
      if (page < totalPages) {
          setPage(page + 1);
      }
  }

  function previousPage() {
      if (page !== 1) {
          setPage(page - 1);
      }
  }

    return (
      <div className="genreView-container">
        <h1>{x} Movies</h1>
        <div className='movie-list'>
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                    />
                </div>
            ))}
        </div>
        <div className='pages'>
            <button className="page-button" onClick={previousPage}>
                Previous
            </button>
            <p className="page-number">Page: {page}/{totalPages}</p>
            {page < totalPages && (
                <button className="page-button" onClick={nextPage}>
                    Next
                </button>
            )}
        </div>
      </div>
    )
}

export default GenreView;