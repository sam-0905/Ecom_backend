export function cartRedFunc(state, action) {
  if (!state) return { cartItems: [], quantity: 0, totalPrice: 0 };

  const price = parseFloat(action.payload?.price) || 0;

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

    
    case 'ADD_TO_CART': {
      // Ensure price is a number (parseFloat)
      const price = parseFloat(action.payload.price) || 0;
    
      // Find the existing item in the cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    
      if (existingItem) {
        // If item already exists, update the quantity and price
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { 
                ...item, 
                quantity: item.quantity + 1,  // Increment the quantity of the existing item
                totalPrice: (item.quantity + 1) * item.price  // Update the total price for the existing item
              }
            : item
        );
    
        // Recalculate total quantity and total price for the whole cart
        const totalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
        return {
          ...state,
          cartItems: updatedCartItems,
          quantity: totalQuantity,  // Update total quantity of all items in the cart
          totalPrice: totalPrice  // Update total price of all items in the cart
        };
      } else {
        // If item doesn't exist, add it as a new entry with quantity 1
        const newItem = { ...action.payload, quantity: 1 };
    
        const updatedCartItems = [...state.cartItems, newItem];
    
        // Recalculate total quantity and total price for the whole cart
        const totalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
        return {
          ...state,
          cartItems: updatedCartItems,
          quantity: totalQuantity,  // Update total quantity of all items in the cart
          totalPrice: totalPrice  // Update total price of all items in the cart
        };
      }
    }
    
    
    case "REMOVE_FROM_CART": {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (!existingItem) return state;

      const updatedCartItems = state.cartItems
        .map(item =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0);

      const quantity = updatedCartItems.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = updatedCartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        quantity,
        totalPrice,
      };
    }

    case "DELETE_FROM_CART": {
      const itemToDelete = state.cartItems.find(item => item._id === action.payload._id);
      if (!itemToDelete) return state;

      const updatedCartItems = state.cartItems.filter(item => item._id !== action.payload._id);

      const quantity = updatedCartItems.reduce((acc, item) => acc + item.qty, 0);
      const totalPrice = updatedCartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      return {
        ...state,
        cartItems: updatedCartItems,
        quantity,
        totalPrice,
      };
    }

    default:
      return state;
  }
}
