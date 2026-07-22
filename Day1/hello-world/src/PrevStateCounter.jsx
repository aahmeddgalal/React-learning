import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0)
  console.log("Render phase: Component rendering wit count = ", count) // after rendering

  const handleClick = () => {
    setCount((prev) => prev + 1); //render sanpshots 
    console.log("After setCount(prev => prev + 1), count is: ", count);
    setCount((prev) => prev + 10);
    console.log("After setCount(prev => prev + 10), count is: ", count);
    setCount((prev) => prev + 5);
    console.log("After setCount(prev => prev + 5), count is: ", count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}


// import { useState } from "react";

// export const PrevStateCounter = () => {
//   const [count, setCount] = useState(0)
//   console.log("Render phase: Component rendering wit count = ", count)

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log("Agter setCount(count + 1), count is: ", count)
//     setCount(count + 10);
//     console.log("Agter setCount(count + 10), count is: ", count)
//     setCount(count + 5);
//     console.log("Agter setCount(count + 5), count is: ", count)
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }
