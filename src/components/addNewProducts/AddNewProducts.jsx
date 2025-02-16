// "use client";

// import { set } from "mongoose";
// import React, { useState, useEffect } from "react";

// const addNewProducts = () => {
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) throw new Error("Network Response Was Not Ok");
//         const data = await response.json();
//         setProduct(data.products);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   //This is handleAddToCart Functionality

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   const calculateTotal = () => {
//     const totalPrice = cart.reduce((total, item) => total + item.price, 0);
//     return totalPrice.toFixed(2);
//   };

//   const handleDeleteToCart = (index) => {
//     setCart((prevCart) => prevCart.filter((task, i) => i !== index));
//   };

//   //This will removeCart Functionality

//   if (loading) return <div>Loading</div>;
//   if (error) return <div>Error</div>;

//   return (
//     <div>
//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {product.map((product, index) => (
//           // Make sure to return the JSX from the map function
//           <div
//             key={index}
//             className="bg-blue-100 rounded-lg shawdow-sm overflow-hidden"
//           >
//             <img
//               src={product.images[0]} // Using the first image from the 'images' array
//               alt={product.title}
//               className="w-full h-64 object-cover object-center"
//             />

//             <div className="p-4">
//               <h3 className="flex font-bold justify-center">{product.title}</h3>
//               <p className="text-gray-600 text-sm mt-2 rounded-lg">
//                 {product.description}
//               </p>
//               <div className="flex item-center justify-between mt-4 p-2">
//                 <p>Product Price: {product.price}</p>

//                 <button
//                   className="px-2 py-2 text-white bg-blue-500 rounded-lg"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         ;{/* Display Cart */}
//         <div className="mt-8 p-4 bg-gray-200 rounded-lg">
//           <h2 className="text-xl font-bold">🛒 Cart Items</h2>
//           {cart.length > 0 ? (
//             cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between p-2 bg-white my-2 shadow-lg rounded-lg"
//               >
//                 <span>
//                   {item.title} - ${item.price}
//                 </span>
//                 <button
//                   className="w-7 h-7 flex items-center justify-center text-2xl font-bold text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
//                   onClick={() => handleDeleteToCart(index)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="w-7 h-7 flex items-center justify-center text-2xl font-bold text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
//                   onClick={() => handleAddToCart(cart[index])}
//                 >
//                   +
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p>No items in cart</p>
//           )}
//           <div className="flex justify-center items-center bg-red-50 rounded-md shawdow-lg p-4">
//             Total Price: ${calculateTotal()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return;
// };

// export default addNewProducts;

"use client";

import React, { useState } from "react";
import productList from "../productList/ProductList";
import Cart from "../Cart/Cart";

const AddNewProducts = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleDeleteFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <productList handleAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleDeleteFromCart={handleDeleteFromCart}
      />
    </div>
  );
};

export default AddNewProducts;
