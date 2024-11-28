import './Feature.css';

function Featured() {
    const [movies, setMovies] = useState([]);
    /*const navigate = useNavigate();*/

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                 `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
        });
    });

    function loadMovie(id) {
        navigate(`/movies/${id}`);
    }

    return (
        <div>
            <h2>Featured Movies</h2>
            <div className="movies-container">
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
        </div>
    );
}

export default Featured;