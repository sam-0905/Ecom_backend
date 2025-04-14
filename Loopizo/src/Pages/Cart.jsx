import { useCart } from "../Context/Cart-context";
import EmptyCart from "../assets/Icon/EmptyCart.png";
import "animate.css";
import "../Pages/cart.css"

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItems, quantity, totalPrice } = state;

  return (
    <>
    <div className="cart">
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ _id,title, price, qty, image }) => (
            <div key={_id} className="cart-card">
              <div>
                <img src={image} alt={title} style={{ width: "200px" }} />
              </div>
              <div>
                <h3>{title}</h3>
                <p className="price">Price: ₹{price}</p>
                <p className="quantity">Quantity: {qty}</p>
              </div>
              <div className="cart-btn">
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { _id, price },
                    })
                  }
                >
                  +
                </button>
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: { _id ,price },
                    })
                  }
                >
                  -
                </button>
                <button
                  className="button"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_FROM_CART",
                      payload: { _id ,price },
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
            <h1 className="text">Your cart is empty</h1>
          </div>
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
