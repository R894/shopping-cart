import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Cart(){
    const {cartItems, setCartItems} = useContext(ShopContext);

    return(
        <div className="w-64 bg-white shadow p-4">
            {cartItems.map((item, index) => (<div key={index}>
                <p>{item.data.title}</p>
                <p>{item.count}</p>
            </div>))}
        </div>
        
    );
}

export default Cart;