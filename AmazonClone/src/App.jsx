import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import products from "./data";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Home products={products} />
      <Footer />
    </div>
  );
};

export default App;
