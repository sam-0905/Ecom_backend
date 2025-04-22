export const wishRedFunc = (state, action) => {
  switch (action.type) {
    case "SET_WISH":
      return {
        ...state,
        wishlist: action.payload.map(item => ({
          id: item.id,          // needed for delete
          ...item.product         // spread product info
        })),
      };
    
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
