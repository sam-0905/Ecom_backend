import axios from "axios"
import { useEffect, useState } from "react"
import { useCart } from "../Context/Cart-context"



const Cart = () => {
        const [cart,setCart] = useState([])
        const {state,dispatch} = useCart();
        
    useEffect(() => {
        axios.get("/api/user/cart")
        .then(res.data.cart)
        console.log(res.data.cart)
    })
    return (    
        <>
        <div className="cart">
    
          <div>
            {cartItems.length > 0 ? (
              cartItems.map(({ id, name, price, quantity ,image}) => (
              <div key={id} className="cart-card">
                  <div><img src={image}></img></div>
                  <div><h3>{name}</h3>
                   <p className="price">Price: ${price}</p>
                   <p className="quantity">Quantity: {quantity}</p></div>
                   {/* <div className="cart-btn">
                   <button className="button-32" onClick={()=> dispatch({type:"ADD_TO_CART", payload:{id,price}})}>+</button>
                  <button className="button-32" onClick={() =>dispatch({ type:'REMOVE_FROM_CART',payload:{id,price}})}>-</button>
                  <button className="button-32" onClick={() =>dispatch({ type:"DELETE_FROM_CART",payload:{id,price}})}><i class="fa fa-trash-o" style={{fontSize:"16px"}}></i>
                  </button>
               </div> */}
              </div>
              ))
            ):( <div className="animate__animated animate__fadeInLeft">
                <img src={EmptyCart} alt="cartImage" className="empty-cart"/>
                <h1 className="text"> Your cart is empty</h1>
            </div> )}
                  
          </div>
          <div className="cart-order">
                    <h1>Order Summary</h1>
                    <h2>Quantity: {quantity}</h2>
                    <hr />
                    <h2>Total Price: {totalPrice}</h2>
                  </div>
        </div>
      </>       
      );
}

export default Cart;