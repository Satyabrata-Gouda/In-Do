import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/home-page/HomePage";
import Footer from "../customer/components/footer/Footer";
import Navigation from "../customer/components/navigation/Navigation";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/product-details/ProductDetails";
import CheckOut from "../customer/components/check-out/CheckOut";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CutomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CutomerRouters;
