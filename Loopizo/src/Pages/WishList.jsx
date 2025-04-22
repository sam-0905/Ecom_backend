import React from "react";
import { useWish } from "../Context/Wish-context";
// import emptyWish from "../assets/emptyWish.png";

const WishList = () => {
  const {
    state: { wishlist },
    deleteFromWish,
  } = useWish();

  if (!Array.isArray(wishlist) || wishlist.length === 0) {
    return (
      <h1 className="empty-wish animate__animated animate__flash">
        {/* <img src={emptyWish} alt="empty-wish" /> */}
        Your wishlist is empty
      </h1>
    );
  }

  return (
    <>
      {wishlist.map(({id, title, image, price }) => (
        console.log("Wishlist:", wishlist),
        <div key={id} className="wishlist-item">
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <h2>{title}</h2>
            <p className="price">Price: ${price}</p>
          </div>
          <div>
            <button className="button-32" onClick={() => deleteFromWish(id)}>
              <i className="fa fa-trash-o" style={{ fontSize: "16px" }} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishList;
