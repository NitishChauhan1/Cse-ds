import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src="" alt="logo-here" />
      <h2>Amazon Webpage</h2>
      <ul className="nav-list">
        <li>Home</li>
        <li>cost</li>
        <li>About</li>
      </ul>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <input type="text" name="search" id=""></input>
    </div>
  );
};

const Product = () => {
  return (
    <div className="product">
      <img
        className="prod-img"
        src="https.ic1.maxabout.us/autos/tw_india/J/2020/5/jawa-perak-bobber-front-3-quarter-view.jpg"
        alt="Jawa Perak bike" // Added alt text
      />
      <h4>Bike</h4>
      <h4>Price</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      {/* --- FIX was here: Must be Capitalized --- */}
      <Search />
      <div className="prod-container">
        {/* --- FIX was here: Must be Capitalized --- */}
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>copy right ABES-DS-C,2025</p>
    </div>
  );
};

// This is your main App component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
