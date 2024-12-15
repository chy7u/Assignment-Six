//Create a view called CartView.jsx that can be accessed via /cart URL. Each movie in the
//cart should have its trailer image, title and a button to remove it.
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/GlobalState";
import "./CartView.css";

function CartView() {
    const { 
        cartItems, setCartItems, 
        firstName
    } = useStoreContext();

    function remove(movie) {
        setCart(cart.filter(item => item !== movie));
    }

    return (
        <div className="cart-view">
            <h2>{firstName}'s Cart</h2>
            <div className="cart-item-container">
                {cartItems.map((movie) => (
                    <div key={movie.id} className="cart-view-item">
                        <p>{movie.title}</p>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="cart-view-image"
                        />
                        <button className="trash" onClick={() => { remove(movie)}}>
                            Delete item
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartView;