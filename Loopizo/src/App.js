import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Mockman from "mockman-js";
import Header from "./components/Header";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/Category";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import Products from "./Products";
import ProductDetail from "./Pages/ProductDetail";
import Error from "./Pages/Error";
import Login from "./Pages/Login";

function App() {
  return (
    <>
    <Header/>
    <Routes>

        <Route path="/mock" element={<Mockman/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path="/category/:categoryId" element={<CategoryPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<WishList/>} />
        <Route path="*" element={<Error/>} /> 

        {/* <Route path="/user" element={<UserComponent />} /> */}
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/about" element={<AboutComponent />} /> */}
      </Routes>
    </>
  );
}

export default App;
