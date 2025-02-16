import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-full h-64 hover:scale-110 object-cover object-center"
      />
      <div className="p-2">
        <h3 className="flex font-bold justify-center text-lg text-gray-800">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4 p-2">
          <p className="font-semibold text-gray-700">
            Product Price: ${product.price}
          </p>
          <div>
            <button
              className="px-2 py-2 text-white bg-indigo-600 hover:bg-indigo-800 rounded-lg"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            <button
              className="ml-2 px-2 py-2 text-white bg-red-600 hover:bg-red-800 rounded-lg"
              onClick={handleRemoveFromCart}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
