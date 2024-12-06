import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [cart, setCart] = useState(Map());

    return (
        <StoreContext.Provider value={{
            email, setEmail, 
            cart, setCart, 
            password, setPass 
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}