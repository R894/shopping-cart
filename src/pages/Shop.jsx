import { useContext } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ShopContext from "../context/ShopContext";
import Cart from "../components/Cart";

function Shop(){
    const {products} = useContext(ShopContext);

    return(
        <>
            <NavBar/>
            <div className="grid grid-cols-5 p-2">
                {products ? (products.map((product, idx) =>(<div key={idx}><ProductCard data={product}/></div>))) : null}
            </div>
        </>
        
    );
}

export default Shop;