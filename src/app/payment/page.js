import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Payment Page</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart to pay for.</p>
      ) : (
        <div>
          <h3>Your Cart Items:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
          <button>Make Payment</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
