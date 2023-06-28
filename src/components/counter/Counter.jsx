import { Prev } from "react-bootstrap/esm/PageItem";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((Prev) => Prev);
  };

  return (
    <div className="Counter">
      <button onClick={handleDecrement}>-</button>
      <p>{count}</p>
      <button>+</button>
    </div>
  );
};

export default Counter;
