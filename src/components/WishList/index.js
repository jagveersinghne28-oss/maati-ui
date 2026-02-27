import React from "react";
import "./style.scss";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="wishlist-empty">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-image"
              />
              <div className="wishlist-info">
                <h3 className="wishlist-name">{item.name}</h3>
                <p className="wishlist-price">₹{item.price}</p>
                <div className="wishlist-actions">
                  <button
                    className="wishlist-btn add-btn"
                    onClick={() => addToCart(item)}
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    className="wishlist-btn remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
