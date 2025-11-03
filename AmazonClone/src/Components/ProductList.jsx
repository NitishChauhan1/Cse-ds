import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
