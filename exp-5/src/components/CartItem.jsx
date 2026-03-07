import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch();

  return (
    <div className="card">

      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <p>Qty: {item.quantity}</p>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Remove
      </button>

    </div>
  );
}

export default CartItem;