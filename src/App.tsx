import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Wishlist from "./pages/wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
