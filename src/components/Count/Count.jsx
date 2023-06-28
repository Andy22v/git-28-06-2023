import { useState } from "react";
import "./Count.css";

const Count = () => {
  const [number, setNumber] = useState(0);

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  const handleIncrease = () => {
    setNumber(number - 1);
  };

  return (
    <div className="Count">
      <button onClick={handleDecrement}>-</button>
      <p>{number}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Count;
