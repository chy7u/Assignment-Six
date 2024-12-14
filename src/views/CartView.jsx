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
        <>
            {}
        </>
    )
}

export default CartView;