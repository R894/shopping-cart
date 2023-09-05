import { createContext } from "react";

const ShopContext = createContext({
    products: [],
    cartItems: [],
    setCartItems: () =>{},
});

export default ShopContext;