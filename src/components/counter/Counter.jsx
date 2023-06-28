import { Prev } from "react-bootstrap/esm/PageItem";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="Counter">
      <button onClick={handleDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counter;
