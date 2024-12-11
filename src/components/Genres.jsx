import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreProvider } from "../context/GlobalState";
import "./Genres.css";

function Genres(props) {
  
  return (
    <div>
      <ul className="genres">
        {
          props.genresList.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/movies/genre/${item.id}`}>
                  <button>{item.genre}</button>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Genres;