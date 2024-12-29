import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Mockman from "mockman-js";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Body from "./Body";
import CategoryPage from "./Pages/Category";

function App() {
  return (
    <>
    <Header/>
    <Routes>

        <Route path="/mock" element={<Mockman/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/body" element={<Body/>} />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />

        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route path="/wish" element={<WishList />} /> */}
        {/* <Route path="*" element={<Error />} />  */}

        {/* <Route path="/user" element={<UserComponent />} /> */}
        {/* <Route path="/login" element={<LoginComp />} /> */}
        {/* <Route path="/about" element={<AboutComponent />} /> */}
        {/* this route shld also map to a component. */}
        {/* <Route path="/product/:ProductId" element={<ProductComponent />} />
        <Route path="/cateogry" element={<Category />} />*/}
      </Routes>
    </>
  );
}

export default App;
