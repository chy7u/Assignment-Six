import { useNavigate } from "react-router-dom";

function Genres(props) {
  const navigate = useNavigate();
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
                <li key={item.id} onClick={() => click(item)}>
                    {item.genre}
                </li>
            })
          }
        </ul>
      </div>
    )
  }
  
  export default Genres;