import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/home-page/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/product-details/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/check-out/CheckOut';

function App() {
  return (
    <div className="">
<div>
<Navigation/>
</div>
<div>
{/* <HomePage/> */}
{/* <Product/> */}
{/* <ProductDetails/> */}
{/* <Cart/> */}
<CheckOut/>
</div>
<Footer/>

    </div>
  );
}

export default App;
