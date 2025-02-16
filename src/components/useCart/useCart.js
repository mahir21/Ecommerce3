import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`${product.title} added to cart`);
  };

  const handleDeleteFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return { cart, handleAddToCart, handleDeleteFromCart, calculateTotal };
};

export default useCart;
