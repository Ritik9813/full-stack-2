import { useSelector } from "react-redux";
import { useMemo } from "react";

function Checkout() {

  const cart = useSelector(state => state.cart);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) =>
      sum + item.quantity, 0);
  }, [cart]);

  return (
    <div className="page">

      <h2>Checkout</h2>

      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>

      <button>Place Order</button>

    </div>
  );
}

export default Checkout;