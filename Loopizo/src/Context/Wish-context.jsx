import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { wishRedFunc } from "../Reducer/WishList-reducer";

const WishContext = createContext();

const initialState = {
  wishlist: [],
};

const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishRedFunc, initialState);
  const token = localStorage.getItem("token");

  const config = {
    headers: { authorization: token },
  };

  // Get Wishlist
  const getWish = async () => {
    if (!token) {
      console.error("Token missing. Please log in.");
      return;
    }
    try {
      const res = await axios.get("https://mockbee.netlify.app/api/user/wishlist", config);
      dispatch({ type: "SET_WISH", payload:res.data.wishlist });
    } catch (err) {
      console.error("Wishlist fetch failed:", err);
    }
  };

  // Add to Wishlist
  const AddToWish = async (product) => {
    if (!token) {
      console.error("Token missing. Please log in.");
      return;
    }
  
    try {
      const res = await axios.post("/api/user/wishlist", {product}, config);
      dispatch({ type: "SET_WISH", payload: res.data.wishlist });
    } catch (err) {
      console.error("Add to wishlist error:", err.response ? err.response.data : err);
    }
  };
  

  // Delete from Wishlist
  const deleteFromWish = async (productId) => {
    if (!token) {
      console.error("Token missing. Please log in.");
      return;
    }
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, config);
      dispatch({ type: "SET_WISH", payload: res.data.wishlist });
    } catch (err) {
      console.error("Delete from wishlist error:", err.response ? err.response.data : err);
    }
  };
  

  // Fetch wishlist on token change
  useEffect(() => {
    if (token) getWish();
  }, [token]);

  return (
    <WishContext.Provider value={{ state, dispatch, AddToWish, deleteFromWish }}>
      {children}
    </WishContext.Provider>
  );
};

const useWish = () => useContext(WishContext);

export { WishProvider, useWish };
