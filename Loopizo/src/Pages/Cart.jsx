import { useCart } from "../Context/Cart-context";
import EmptyCart from "../assets/Icon/EmptyCart.png";
import "animate.css";
import "../Pages/cart.css"
import { useState } from "react";
import Alert from "../components/Alert";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItems, quantity, totalPrice } = state;
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({message,type})
}


  return (
    <>
    <div className="cart">
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, price, quantity, image,title }) => (
            console.log("from cart",cartItems),
            <div key={id} className="cart-card">
              <div>
                <img src={image} alt={title} className="cart-img" />
              </div>
              <div>
                <h3>{title}</h3>
                <p className="price">Price: ₹{price}</p>
                <p className="quantity">Quantity: {quantity}</p>
              </div>
              <div className="cart-btn">
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { id, price,name,image },
                    })
                  }
                >
                  +
                </button>
                  
                 <button
                  className="button remove"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: { id },
                    });
                    showAlert("Removed from Cart", "error");
                   }}
                 >
                  -
               </button>
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_FROM_CART",
                      payload: { id },
                    })
                  }
                >
                  <i
                    className="fa fa-trash-o"
                    style={{ fontSize: "16px" }}
                  ></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="animate__animated animate__fadeInLeft">
            <img
              src={EmptyCart}
              alt="Empty Cart"
              className="empty-cart"
            />
            <h2 className="empty-cart-text">🛍️ The shelves are full, but your cart isn’t! 🛒</h2>

          </div>
        )}
               {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={() => setAlert(null)}
                      />
                     )}
      </div>

      <div className="cart-order">
        <h1>Order Summary</h1>
        <hr />
        <h2>Total Quantity: {quantity}</h2>
        <h2>Total Price: ₹{totalPrice}</h2>
      </div>
    </div>
    </>
  );
};

export default Cart;
