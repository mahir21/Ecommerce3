import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/components/redux/cartSlice";
import { useRouter } from "next/router"; // For navigation

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProceedToPayment = () => {
    router.push("/payment"); // Navigate to the payment page
  };

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product)); // Remove item from cart
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <button
                  className="text-red-600"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleProceedToPayment}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
