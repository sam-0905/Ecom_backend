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

    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      let updatedCartItems;

      if (existingItem) {
        // Increase quantity of existing product
        updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      const quantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return {
        ...state,
        cartItems: updatedCartItems,
        quantity,
        totalPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (!existingItem) return state;

      const updatedCartItems = state.cartItems
        .map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); // remove if qty = 0

      const quantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return {
        ...state,
        cartItems: updatedCartItems,
        quantity,
        totalPrice,
      };
    }

    case "DELETE_FROM_CART": {
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      const quantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
