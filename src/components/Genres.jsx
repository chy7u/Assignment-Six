import { useNavigate } from "react-router-dom";

function Genres(props) {
    function genrePage(id) {
        navigate(`genre/${id}`);
    }
    const click = (item) => {
        genrePage(item.id);
    }
    return (
      <div>
        <ul>
          {
            props.genreList.map((item) => {
                <li key={item.id}>
                    {item.genre}
                </li>
            })
          }
        </ul>
      </div>
    )
  }
  
  export default Genres;