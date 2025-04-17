// ../Context/Wish-context.js
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { wishRedFunc } from "../Reducer/WishList-reducer";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const WishContext = createContext();

export const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishRedFunc, initialState);
  const token = localStorage.getItem("token");
  const config = { headers: { authorization: token } };

  // fetch entire wishlist
  const getWish = async () => {
    try {
      const res = await axios.get("/api/user/wishlist", config);
      dispatch({ type: "SET_WISH", payload: res.data.wishlist });
    } catch (err) {
      console.error("Wishlist fetch failed:", err);
    }
  };

  // add one product, then re‑sync
  const AddToWish = async product => {
    try {
      const res = await axios.post("/api/user/wishlist", { product }, config);
      dispatch({ type: "SET_WISH", payload: res.data.wishlist });
    } catch (err) {
      console.error("Add to wishlist error:", err);
    }
  };

  // delete one product, then re‑sync
  const deleteFromWish = async productId => {
    try {
      const res = await axios.delete(
        `/api/user/wishlist/${productId}`,
        config
      );
      dispatch({ type: "SET_WISH", payload: res.data.wishlist });
    } catch (err) {
      console.error("Delete from wishlist error:", err);
    }
  };

  // keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  // initial load if token exists
  useEffect(() => {
    if (token) getWish();
  }, [token]);

  return (
    <WishContext.Provider
      value={{ state, dispatch, AddToWish, deleteFromWish }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => useContext(WishContext);
