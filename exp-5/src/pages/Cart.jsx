import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";

function Cart() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="page">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (

        <table className="cart-table">

          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {cart.map(item => (

              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price * item.quantity}</td>

                <td>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default Cart;