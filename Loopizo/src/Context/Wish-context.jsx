import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishReducer } from './../Reducer/WishList-reducer';

const WishContext = createContext();

const initialState = [];

const WishListProvider = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(wishReducer, initialState);

  // Get token from localStorage
  const encodedToken = localStorage.getItem("token");

  // Set authorization header config
  const getAuthConfig = () => ({
    headers: { authorization: encodedToken }
  });

  // Fetch wishlist from MockBee if token exists
  useEffect(() => {
    const getWishlist = async () => {
      if (!encodedToken) return;

      try {
        const config = getAuthConfig();
        const response = await axios.get("/api/user/wishlist", config);
        wishDispatch({ type: "SET_WISH", payload: response.data.wishlist });
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      }
    };

    getWishlist();
  }, [encodedToken]);

  const addToWishlist = async (product) => {
    try {
      const config = getAuthConfig();
      const response = await axios.post("/api/user/wishlist", { product }, config);
      wishDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const config = getAuthConfig();
      const response = await axios.delete(`/api/user/wishlist/${product.id}`, config);
      wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
    }
  };
  
    

  return (
    <WishContext.Provider value={{ wishState, wishDispatch, removeFromWishlist, addToWishlist }}>
      {children}
    </WishContext.Provider>
  );
};

const useWish = () => useContext(WishContext);

export { useWish, WishListProvider };
