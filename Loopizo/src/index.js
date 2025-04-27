import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./Context/Cart-context";
import { WishProvider } from "./Context/Wish-context";
import { AlertProvider } from "./Context/Alert-context";
import { AuthProvider } from "./Context/Auth-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <AuthProvider>
         <AlertProvider>
        <WishProvider>
       <CartProvider>
    <App />
       </CartProvider>
       </WishProvider>
       </AlertProvider>
       </AuthProvider>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
