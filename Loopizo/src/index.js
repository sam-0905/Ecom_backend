import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import "./App.css";
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
          <AuthProvider>
         <AlertProvider>
        <WishListProvider>
       <CartProvider>
       <Router>
    <App />
       </Router>
       </CartProvider>
       </WishListProvider>
       </AlertProvider>
       </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
