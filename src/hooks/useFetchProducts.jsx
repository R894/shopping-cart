import { useEffect, useState } from "react"

const useFetchProducts = () => {
    const [data,setData] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json));
    }, []);
    
    return data;
}

export default useFetchProducts;