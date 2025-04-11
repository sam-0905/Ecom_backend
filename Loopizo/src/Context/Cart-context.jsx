import { createContext, useContext, useReducer } from "react";
import { cartRedFunc } from "../Reducer/Cart-reducer";


const CartContext = createContext()

const CartProvider = ({Children}) => {
    const initialState = { cartItems: [], quantity: 0,totalPrice: 0,}

    const [state ,dispatch] = useReducer( cartRedFunc, initialState) 

    useEffect(() => {
        getCart()
        .then((res) => {
          dispatch({ type: "SET_CART", payload: res.data.cart });
        });
      }, []);
    
        
    return <CartContext.Provider value={{state,dispatch}}>
            {Children}
           </CartContext.Provider>

}

const useCart = () => useContext(CartContext)

export {useCart,CartProvider}