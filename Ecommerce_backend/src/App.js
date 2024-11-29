import "./App.css";
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>App</h1>
    {/* <Header/> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/body" element={<Body/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mockman" element={<MockMan />} />

        <Route path="/wish" element={<WishList />} />
        <Route path="*" element={<Error />} /> 

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
