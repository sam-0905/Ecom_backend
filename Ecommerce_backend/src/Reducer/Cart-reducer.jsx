
export function cartRedFunc(state, action) {
    // console.log('Action:', action);
  // console.log('State:', state);
  
  const price = parseFloat(action.payload.price) || 0;
  
      switch (action.type) {
        case 'ADD_TO_CART':
          const existingItem = state.cartItems.find(item => item.id === action.payload.id);
          
          if(existingItem){
            return {
              ...state, 
              cartItems: state.cartItems.map(item =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item),
              quantity: state.quantity + 1,
              totalPrice: state.totalPrice + price,
            }
          } else{
            return {
              ...state,
              cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
              quantity: state.quantity + 1,
              totalPrice: state.totalPrice + price,
            }
          }
        
        case 'REMOVE_FROM_CART':
          const itemToRemove = state.cartItems.find(item => item.id === action.payload.id);
  
          if (!itemToRemove) return state; // If item doesn't exist, do nothing
    
          const updatedCartItems = state.cartItems.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0); // Remove items with quantity 0
    
          return {
            ...state,
            cartItems: updatedCartItems,
            quantity: Math.max(0, state.quantity - 1), // Ensure no negative quantity
            totalPrice: Math.max(0, state.totalPrice - price), // Ensure no negative price
          };
  
          case "DELETE_FROM_CART": {
            const itemToDelete = state.cartItems.find(item => item.id === action.payload.id);
      
            if (!itemToDelete) return state;
      
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      
            return {
              ...state,
              cartItems: updatedCartItems,
              quantity: updatedCartItems.length > 0
                ? state.quantity - itemToDelete.quantity
                : 0, // Reset to 0 if no items left
              totalPrice: updatedCartItems.length > 0
                ? state.totalPrice - itemToDelete.price * itemToDelete.quantity
                : 0, // Reset to 0 if no items left
            };
          }
  
        default:
          return state;
      }
    }
    