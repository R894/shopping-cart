import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import Cart from "./Cart";

function NavBar(){
    const navigate = useNavigate();
    const {cartItems} = useContext(ShopContext);
    const [cartClicked, setCartClicked] = useState(false);

    return(
        <>
            <div className="fixed w-full">
                <div className="flex p-2 bg-slate-500 gap-2">
                    <h1>Shopping Cart</h1>
                    <ul className="flex gap-2">
                    <li><button onClick={() => navigate("/")}>Home</button></li>
                    <li><button onClick={() => navigate("/shop")}>Shop</button></li>
                    <li><button onClick={() => setCartClicked(!cartClicked)}>Cart</button></li>
                    <p>{cartItems ? cartItems.length : null}</p>
                    </ul>
                </div>
                {cartClicked ? <Cart/> : null}
            </div>
            <div className="pt-16"></div>
        </>
    )
}

export default NavBar;