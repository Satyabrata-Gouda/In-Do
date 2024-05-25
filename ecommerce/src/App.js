import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/home-page/HomePage";
import Footer from "./customer/components/footer/Footer";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/product-details/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import CheckOut from "./customer/components/check-out/CheckOut";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CutomerRouters from "./Routers/CutomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CutomerRouters />}></Route>
        {/* <Route path="/cart" element={<Cart/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
