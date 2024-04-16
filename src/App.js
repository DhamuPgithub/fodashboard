import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./Screens/DashBoard"; // Import the Home component
import Product from "./Screens/Product"; // Import the About component
import AddProduct from "./Screens/AddProduct"; // Import the About component
import Settings from "./Screens/Settings"; // Import the About component

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
