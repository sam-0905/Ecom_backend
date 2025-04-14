import { useCart } from "../Context/Cart-context";

const Cart = () => {
  const { state, addToCart, removeOneFromCart, deleteFromCart } = useCart();
  const { cartItems, quantity, totalPrice } = state;

  return (
    <div className="cart">
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ _id, name, price, qty, image }) => (
            <div key={_id} className="cart-card">
              <div>
                <img src={image} alt={name} />
              </div>
              <div>
                <h3>{name}</h3>
                <p className="price">Price: ₹{price}</p>
                <p className="quantity">Quantity: {qty}</p>
              </div>
              <div className="cart-btn">
                <button
                  className="button-32"
                  onClick={() => addToCart({ _id, name, price, image })}  
                >
                  +
                </button>
                <button
                  className="button-32"
                  onClick={() => removeOneFromCart(_id)}
                >
                  -
                </button>
                <button
                  className="button-32"
                  onClick={() => deleteFromCart(_id)}
                >
                  <i className="fa fa-trash-o" style={{ fontSize: "16px" }}></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="animate__animated animate__fadeInLeft">
            <img
              src="/path-to-empty-cart-image.png"
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
  );
};

export default Cart;
