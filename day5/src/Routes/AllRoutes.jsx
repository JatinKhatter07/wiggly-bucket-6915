import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import HomePage from "./HomePage";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ProductPage from "./ProductPage";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";
import Admin from "./Admin";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/Admin" element={<Admin/>}></Route>
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
