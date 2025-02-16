"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import useCart from "../useCart/useCart";
import SearchBar from "../SearchBar/SearchBar";

const ProductList = () => {
  const { handleAddToCart } = useCart();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
        );
        if (!response.ok) throw new Error("Network Response Was Not Ok");
        const data = await response.json();
        setProduct(data.products.reverse());
        setFilteredProducts(data.products); // Show all products initially
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-center">
        <SearchBar
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No Products Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
