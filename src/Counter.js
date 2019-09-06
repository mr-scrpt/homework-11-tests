import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment} className="increment">Increment</button>
      <button onClick={decrement} className="decrement">Decrement</button>
    </>
  );
};
