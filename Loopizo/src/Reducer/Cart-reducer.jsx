
export function cartRedFunc(state, action) {
    console.log('Action:', action);
  console.log('State:', state);

  const price = parseFloat(action.payload.price) || 0;
  if (!state) return { cartItems: [], quantity: 0, totalPrice: 0 }; // ✅ fallback

  
  switch (action.type) {
    case "SET_CART": {
      const cartItems = action.payload || [];

      const quantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      return {
        ...state,
        cartItems,
        quantity,
        totalPrice,
      };
    }
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
    
      let updatedCartItems;
    
      if (existingItem) {
        // If item already exists, increase qty
        updatedCartItems = state.cartItems.map(item =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // If new item, add it with qty = 1
        updatedCartItems = [...state.cartItems, { ...action.payload, qty: 1 }];
      }
    
      const quantity = updatedCartItems.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = updatedCartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
    
      return { ...state, cartItems: updatedCartItems, quantity, totalPrice };
    }
    

        case 'REMOVE_FROM_CART':{
          const itemToRemove = state.cartItems.find(item => item.id === action.payload.id);
  
          if (!itemToRemove) return state; // If item doesn't exist, do nothing
    
          const updatedCartItems = state.cartItems.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0); // Remove items with quantity 0
            
            const quantity = updatedCartItems.reduce((acc, item) => acc + item.qty, 0);
            const totalPrice = updatedCartItems.reduce(
              (acc, item) => acc + item.price * item.qty,
              0
            );
        }
    
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
    