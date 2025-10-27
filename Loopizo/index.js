import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./index.css"
import { makeServer } from "./src/server";
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./src/Context/Cart-context";
import { AlertProvider } from "./src/Context/Alert-context";
import { AuthProvider } from "./src/Context/Auth-context";
import { WishListProvider } from "./src/Context/Wish-context";


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
