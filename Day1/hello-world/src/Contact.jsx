import { ActionButton } from "./ActionButton"

export const Contact = () => {
  const handelContactButton = () => {
    alert("0124543212345")
  }

  return (
    <div>
      <h2>Contact US</h2>
      <ActionButton text={"Contact Us"} onClick={handelContactButton}/>
    </div>
  )
}