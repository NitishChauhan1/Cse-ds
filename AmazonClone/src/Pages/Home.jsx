import React from "react";
import ProductList from "../Components/ProductList";
const Home = ({ products }) => {
  return (
    <div>
      <div className="bg-linear-to-r from-yellow-300 to-orange-400 text-center p-10 text-3xl font-bold text-white">
        Welcome to Amazon Clone 🛍️
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
