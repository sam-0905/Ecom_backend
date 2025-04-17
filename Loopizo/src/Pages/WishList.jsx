// ../components/WishList.jsx
import React from "react";
import { useWish } from "../Context/Wish-context";
// import emptyWish from "../assets/emptyWish.png";

const WishList = () => {
  const {
    state: { wishlist },
    deleteFromWish,
  } = useWish();

  // guard in case someone passes non‑array
  const items = Array.isArray(wishlist) ? wishlist : [];

  if (items.length === 0) {
    return (
      <h1 className="empty-wish animate__animated animate__flash">
        <img src={emptyWish} alt="empty-wish" />
        Your wishlist is empty
      </h1>
    );
  }

  return (
    <>
      {items.map(({ id,title, price, quantity, image  }) => (
        <div key={id} className="wishlist-item">
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <h2>{title}</h2>
            <p className="price">Price: ${price}</p>
          </div>
          <div>
            <button
              className="button-32"
              onClick={() => deleteFromWish(id)}
            >
              <i className="fa fa-trash-o" style={{ fontSize: "16px" }} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default WishList;
