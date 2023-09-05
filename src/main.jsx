import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopContext from './context/ShopContext';
import useFetchProducts from './hooks/useFetchProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
]);

const App = () => {
  const products = useFetchProducts();
  const [cartItems, setCartItems] = useState([]);

  return (
    <React.StrictMode>
      <ShopContext.Provider value={{ products: products, cartItems: cartItems, setCartItems: setCartItems }}>
        <RouterProvider router={router} />
      </ShopContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);