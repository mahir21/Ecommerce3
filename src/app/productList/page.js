// pages/productList.js

import ProductList from "@/components/productList/ProductList";
import Navigation from "@/components/home/Navigation";
import Footer from "@/components/home/footer/Footer";

export default function ProductListPage() {
  return (
    <div>
      <Navigation></Navigation>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}
