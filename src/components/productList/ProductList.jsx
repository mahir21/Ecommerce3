// // // "use client";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useEffect } from "react";
// // // import {
// // //   incrementQuantity,
// // //   decrementQuantity,
// // //   setProducts,
// // // } from "../redux/productSlice";

// // // export async function getServerSideProps() {
// // //   // Fetch data from external API on the server
// // //   const res = await fetch(
// // //     "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
// // //   );
// // //   const repo = await res.json();

// // //   // Return the data as props to the page
// // //   return { props: { repo } };
// // // }

// // // export default function Page({ repo }) {
// // //   const dispatch = useDispatch();

// // //   // Get products from Redux store
// // //   const products = useSelector((state) => state.product.products);

// // //   // Dispatch the products to Redux state once the component has mounted
// // //   useEffect(() => {
// // //     if (products.length === 0) {
// // //       dispatch(setProducts(repo.products)); // Dispatch products only once when state is empty
// // //     }
// // //   }, [repo.products, products.length, dispatch]);

// // //   const handleIncrement = (id) => {
// // //     dispatch(incrementQuantity(id));
// // //   };

// // //   const handleDecrement = (id) => {
// // //     dispatch(decrementQuantity(id));
// // //   };

// // //   return (
// // //     <main>
// // //       <ul>
// // //         {products.length > 0 &&
// // //           products.map((product) => (
// // //             <li key={product._id}>
// // //               <h2>{product.name}</h2>
// // //               <p>{product.price}</p>
// // //               <img
// // //                 src={product.thumbnail}
// // //                 alt={product.name}
// // //                 width={200}
// // //                 height={200}
// // //               />
// // //               <div>
// // //                 <button onClick={() => handleIncrement(product._id)}>+</button>
// // //                 <button onClick={() => handleDecrement(product._id)}>-</button>
// // //                 {/* Display quantity */}
// // //                 <p>Quantity: {product.quantity || 0}</p>
// // //               </div>
// // //             </li>
// // //           ))}
// // //       </ul>
// // //     </main>
// // //   );
// // // }

// // // components/productList/ProductList.js
// // "use client"; // Forces this file to be a Client Component

// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect } from "react";
// // import {
// //   incrementQuantity,
// //   decrementQuantity,
// //   setProducts,
// // } from "../redux/productSlice";

// // export default function ProductList({ products }) {
// //   const dispatch = useDispatch();
// //   const storedProducts = useSelector((state) => state.product.products);

// //   // Dispatch products to Redux when the component mounts
// //   useEffect(() => {
// //     if (storedProducts.length === 0) {
// //       dispatch(setProducts(products));
// //     }
// //   }, [products, storedProducts.length, dispatch]);

// //   const handleIncrement = (id) => dispatch(incrementQuantity(id));
// //   const handleDecrement = (id) => dispatch(decrementQuantity(id));

// //   return (
// //     <main>
// //       <ul>
// //         {storedProducts.length > 0 &&
// //           storedProducts.map((product) => (
// //             <li key={product._id}>
// //               <h2>{product.name}</h2>
// //               <p>{product.price}</p>
// //               <img
// //                 src={product.thumbnail}
// //                 alt={product.name}
// //                 width={200}
// //                 height={200}
// //               />
// //               <div>
// //                 <button onClick={() => handleIncrement(product._id)}>+</button>
// //                 <button onClick={() => handleDecrement(product._id)}>-</button>
// //                 <p>Quantity: {product.quantity || 0}</p>
// //               </div>
// //             </li>
// //           ))}
// //       </ul>
// //     </main>
// //   );
// // }

// // components/productList/ProductList.js

// "use client"; // Forces this file to be a Client Component

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {
//   incrementQuantity,
//   decrementQuantity,
//   setProducts,
// } from "@/redux/productSlice";
// export default function ProductList() {
//   const dispatch = useDispatch();

//   const products = useSelector((state) => state.product.products); // Get products from Redux store

//   const handleIncrement = (id) => {
//     dispatch(incrementQuantity(id)); // Increment quantity for a specific product
//   };

//   const handleDecrement = (id) => {
//     dispatch(decrementQuantity(id)); // Decrement quantity for a specific product
//   };

//   return (
//     <main>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product._id}>
//               <h2>{product.name}</h2>
//               <p>{product.price}</p>
//               <img
//                 src={product.thumbnail}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//               />
//               <div>
//                 <button onClick={() => handleIncrement(product._id)}>+</button>
//                 <button onClick={() => handleDecrement(product._id)}>-</button>
//                 <p>Quantity: {product.quantity || 0}</p>
//               </div>
//             </li>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </ul>
//     </main>
//   );
// }
// components/productList/ProductList.jsx
"use client";
import { useSelector } from "react-redux"; // Access Redux store

export default function ProductList() {
  const products = useSelector((state) => state.product.products); // Get products from Redux store

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img
                src={product.thumbnail}
                alt={product.name}
                width={200}
                height={200}
              />
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}
