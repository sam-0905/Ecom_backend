import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./Context/Cart-context";
import { WishProvider } from "./Context/Wish-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <WishProvider>
   <CartProvider>
    <App />
    </CartProvider>
    </WishProvider>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
