import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Cart(){
    const {cartItems, setCartItems} = useContext(ShopContext);

    return(
        cartItems.map((item, index) => (<div key={index}>
                <p>{item.data.title}</p>
                <p>{item.count}</p>
            </div>))
    );
}

export default Cart;