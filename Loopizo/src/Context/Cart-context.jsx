import { createContext, useContext, useReducer, useEffect } from "react";
import { cartRedFunc } from "../Reducer/Cart-reducer";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = { cartItems: [], quantity: 0, totalPrice: 0 };
  const [state, dispatch] = useReducer(cartRedFunc, initialState);
  const token = localStorage.getItem("token");

  const config = {
    headers: { authorization: token },
  };

  const getCart = async () => {
    try {
      const res = await axios.get("https://mockbee.netlify.app/api/user/cart", config);
      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (err) {
      console.error("Cart fetch failed:", err);
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await axios.post("/api/user/cart", { product }, config);
      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  const removeOneFromCart = async (productId) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        config
      );
      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (err) {
      console.error("Remove one error:", err);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, config);
      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (err) {
      console.error("Delete from cart error:", err);
    }
  };

  useEffect(() => {
    if (token) {
      getCart();
    }
  }, [token]);

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, removeOneFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
