export const wishReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISH":
  return action.payload.map(item => ({ ...item, id: item.id }));
  
  case "ADD_TO_WISHLIST":
    const existingItem = state.find(item => item.id === action.payload.id);
    return existingItem ? state : [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter(item => item.id !== action.payload); 

    default:
      return state;
  }
};
