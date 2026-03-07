import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { useState } from "react";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleAdd = () => {

    dispatch(addItem(product));

    setMessage("✅ Item added to cart successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="card">

      <img src={product.image} alt={product.name} className="product-img"/>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button onClick={handleAdd}>
        Add to Cart
      </button>

      {message && <p className="success-msg">{message}</p>}

    </div>
  );
}

export default ProductCard;