// ../Reducer/WishList-reducer.jsx
export const wishRedFunc = (state, action) => {
    switch (action.type) {
        case "SET_WISH":
            return {
              ...state,
              wishlist: action.payload.map(item => ({
                ...item,
                id: item.id
              }))
            };
          
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: Array.isArray(state.wishlist)
            ? [...state.wishlist, action.payload]
            : [action.payload],
        };
  
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlist: Array.isArray(state.wishlist)
            ? state.wishlist.filter(item => item.id !== action.payload)
            : [],
        };
  
      default:
        return state;
    }
  };
  