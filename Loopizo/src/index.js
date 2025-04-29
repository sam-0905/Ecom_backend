import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./Context/Cart-context";
import { AlertProvider } from "./Context/Alert-context";
import { AuthProvider } from "./Context/Auth-context";
import { WishListProvider } from "./Context/Wish-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <AuthProvider>
         <AlertProvider>
        <WishListProvider>
       <CartProvider>
    <App />
       </CartProvider>
       </WishListProvider>
       </AlertProvider>
       </AuthProvider>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
