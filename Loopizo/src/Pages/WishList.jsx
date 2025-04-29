// import emptyWish from "../assets/icons/emptyWish.png";
// import "../wishList/wish.css";
import { useWish } from "../Context/Wish-context";
import { useAlert } from "../Context/Alert-context";
import Alert from "../components/Alert";
import { useCart } from "../Context/Cart-context";
import EmptyWish from "../assets/Icon/EmptyWish.png"

const WishList = () => {
  const { wishState, wishDispatch } = useWish();
  const {showAlert,alert, hideAlert} = useAlert();
  const {dispatch} = useCart()

  return (
    <>
      {wishState.length === 0 ? (
          <div className=" animate__animated animate__rubberBand">
          <img src={EmptyWish} alt="wish-card"className="empty-wish" />
          <h2 className="empty-wish-text">🛍️ Nothing here yet... go find something you love!</h2>
          </div>
      ) : (
        wishState.map(({ title, image, id, price }) => (
          console.log("from wishlist",title, image, id, price),
          <div key={id} className="wish-card">
            <div>
              <img src={image} alt={title} className="wish-img" />
            </div>
            <div>
              <h2>{title}</h2>
              <p className="price">Price: ${price}</p>
            </div>
            <div>

            <button className="button-56"onClick={() =>{
                       wishDispatch({ 
                        type: "REMOVE_FROM_WISHLIST", 
                        payload: id 
                      })

                       dispatch({
                        type: "ADD_TO_CART",
                        payload: { price, id, title, image },
                      });
                      showAlert("Moved to Cart!", "success");
                }}> Move TO CART
                </button>

            <button
              className= "button-32"
                style={{marginTop:"1rem" ,width:"30%"}}
                onClick={() =>{
               wishDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id })
                 showAlert("Deleted from wishlist", "error");
                }
              }
              >
                <i className="fa fa-trash-o" style={{ fontSize: "16px" }}></i>
              </button>
            </div>
          </div>
          
        ))
      )}
       {alert && (
                     <Alert
                       message={alert.message}
                       type={alert.type}
                       onClose={hideAlert}
                      />
                     )}
    </>
  );
};

export default WishList;
