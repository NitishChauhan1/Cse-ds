import React from "react";

const Product = ({ title, price, image, rating }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-yellow-500 mb-2">⭐ {rating}</p>
      <p className="font-bold text-gray-800 mb-3">${price}</p>
      <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
