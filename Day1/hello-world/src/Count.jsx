import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0) // initial value can be a function

  console.log("Rendered: ", count)

  const handelClick = () => {
    setCount(count + 1)
  }

  return <button onClick={handelClick}>Count: {count}</button>
}