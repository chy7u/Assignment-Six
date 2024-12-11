import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

//creates context
export const StoreContext = createContext();

//provider components.. children is the props
export const StoreProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [cart, setCart] = useState(Map());
    const [genres, setGenres] = useState(Map());

    return (
        //value is initial values
        <StoreContext.Provider value={{
            email, setEmail, 
            cart, setCart, 
            password, setPass, 
            genres, setGenres
            //sets these states as values inside the context
        }}>
            {children}
        </StoreContext.Provider>
        //wraps the children inside the Provider, can be
        //used globally
    );
}
//creates variable useStoreContext
//function that returns whatever child is called,
//from the StoreContext
export const useStoreContext = () => {
    return useContext(StoreContext);
}