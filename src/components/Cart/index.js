import React from "react";
import "./style.scss";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Qty: {item.qty}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p className="cart-total">
              Total: <span>${totalPrice.toFixed(2)}</span>
            </p>
            <button className="checkout-btn">Secure Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
