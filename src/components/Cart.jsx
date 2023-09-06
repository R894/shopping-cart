import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Cart(){
    const {cartItems, setCartItems} = useContext(ShopContext);

    const checkoutButtonHandler = () => {
        //outside the scope of this project, empty cart for now
        setCartItems([]);
    }

    return(
        <>
        {cartItems.length > 0 && (
            <div className="w-64 bg-slate-200 shadow p-4">
            {cartItems.map((item, index) => (<div key={index}>
                <p>{item.title}</p>
                <p>{item.count}</p>
            </div>))}
            <button onClick={checkoutButtonHandler}>Checkout</button>
        </div>
        ) }
        </>
    );
}

export default Cart;