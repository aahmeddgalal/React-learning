import { useState } from "react";

export const BatchingCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")
  const [isActive, setIsActive] = useState(false)
  console.log("Render phase: Component rendering"); // after rendering

  // Batching is that React waits until your event handler finishes
  // gather all your state updates
  // applies them in one render
  // waiter in a restaurant he takes the rntire order to the kitchen at once not every single dish

  // State update cycle
  // - triggering updates
  // - the snapshot behavior
  // - using updated function for dependant updates
  // - react optimse everything with batching
   

  const handleClick = () => {
    setCount((prev) => prev + 1); //render sanpshots
    setCount((prev) => prev + 10);
    setCount((prev) => prev + 5);
    setName("Updated")
    setIsActive(true
    )
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Active: {isActive}</h2>
      <h2>name: {name}</h2>
      <button onClick={handleClick}>update all three</button>
    </div>
  );
};

