import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";

function ProductCard({data}){
    const {cartItems, setCartItems } = useContext(ShopContext);
    const [count, setCount] = useState(0);
    
    const buttonClickHandler = () => {
        if(count >= 1){
            setCartItems((prev) => [...prev, {data: data, count: count}]);
        }
    }

    useEffect(() => {
        console.log("Updated cartItems:", cartItems);
    }, [cartItems]); // Log cartItems whenever it changes

    return(
        <>
            <div className="w-64 border p-2 flex flex-col gap-1">
                <img className='w-full aspect-square' src={data.image} />
                <p>{data.title}</p>
                <p>{data.price}</p>
                <div className="flex">
                    <button className="px-5 shrink-0" onClick={() => count >= 1 ? setCount(count - 1) : null}>-</button>
                    <input className="flex-1 w-full text-center" value={count} readOnly></input>
                    <button className="px-5 shrink-0" onClick={() => setCount(count + 1)}>+</button>
                </div>
                
                <button onClick={buttonClickHandler}>Add to Cart</button>
            </div>
        </>
    )
}
export default ProductCard;