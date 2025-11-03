import React from "react";

const Header = () => {
  return (
    <header className="bg-yellow-500 flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold text-white">Amazon Clone</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded w-1/3 outline-none"
      />
      <div className="text-white font-semibold cursor-pointer">Cart 🛒</div>
    </header>
  );
};

export default Header;
