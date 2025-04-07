import { createContext, useContext, useReducer } from "react";
import { cartRedFunc } from "../Reducer/Cart-reducer";

const CartContext = createContext()

const CartProvider = ({Children}) => {
    const [state ,dispatch] = useReducer( cartRedFunc, { cartItems: [],quantity: 0,
        totalPrice: 0,}) 
        
    return <CartContext.Provider value={{state,dispatch}}>{Children}</CartContext.Provider>

}

const useCart = () => useContext(CartContext)

export {useCart,CartProvider}