// import emptyWish from "../assets/icons/emptyWish.png";
// import "../wishList/wish.css";
import axios from "axios";
import { useWish } from "../Context/Wish-context";

const WishList = () => {
  const { wishState, removeFromWishlist } = useWish();

  return (
    <>
      {wishState.length === 0 ? (
        <h1 className="empty-wish animate__animated animate__flash">
          <img src={""} alt="wish-card" />
          Your wishList is empty
        </h1>
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
              <button
                className="button-32"
                onClick={() => removeFromWishlist(title, image, id, price)}
              >
                <i className="fa fa-trash-o" style={{ fontSize: "16px" }}></i>
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default WishList;
