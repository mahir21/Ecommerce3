// // // // pages/productList.js
// // import ProductList from "@/components/productList/ProductList";
// // import Navigation from "@/components/home/Navigation";
// // import Footer from "@/components/home/footer/Footer";

// // export async function getServerSideProps() {
// //   const res = await fetch(
// //     "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
// //   );
// //   const data = await res.json();

// //   return { props: { products: data.products } };
// // }

// // export default function ProductListPage({ products }) {
// //   return (
// //     <div>
// //       <Navigation />
// //       <ProductList products={products} /> {/* Pass products down */}
// //       <Footer />
// //     </div>
// //   );
// // }

// // pages/productList.js
// import ProductList from "@/components/productList/ProductList";
// import Navigation from "@/components/home/Navigation";
// import Footer from "@/components/home/footer/Footer";
// import { useDispatch } from "react-redux";
// import { setProducts } from "@/redux/productSlice"; // Assuming this action exists

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
//   );
//   const data = await res.json();

//   // Get products from the API response
//   //const products = data.products;

//   return { props: { products: data.products } }; // Return the products to be used in the page
// }

// export default function ProductListPage({ products }) {
//   const dispatch = useDispatch();

//   // Dispatch products to Redux store when the page is loaded
//   useEffect(() => {
//     if (products && products.length > 0) {
//       dispatch(setProducts(products)); // Store the fetched products in Redux
//     }
//   }, [products, dispatch]);

//   return (
//     <div>
//       <Navigation />
//       <ProductList /> {/* ProductList only reads from Redux */}
//       <Footer />
//     </div>
//   );
// }

// pages/productList.js
import { useDispatch } from "react-redux";
import { useEffect } from "react"; // Importing useEffect to dispatch to Redux on client-side
import { setProducts } from "@/redux/productSlice"; // Action to set products in Redux
import ProductList from "@/components/productList/ProductList";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/footer/Footer";

// Server-side fetching function
export async function getServerSideProps() {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
  );
  const data = await res.json();

  // Return products as props to be used by the page
  return { props: { products: data.products } };
}

export default function ProductListPage({ products }) {
  const dispatch = useDispatch();

  // Dispatch products to Redux store when the page is loaded
  useEffect(() => {
    if (products && products.length > 0) {
      dispatch(setProducts(products)); // Store the fetched products in Redux
    }
  }, [products, dispatch]);

  return (
    <div>
      <Navigation />
      <ProductList /> {/* ProductList will now read products from Redux */}
      <Footer />
    </div>
  );
}
