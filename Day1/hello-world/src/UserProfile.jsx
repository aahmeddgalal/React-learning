import { useState } from "react";

export const UserProfile = () => {
  const [ user, setUser] = useState({
    name: "bruce wayne",
    age: 30,
    email: "bruce@wayne.com"
  });

  console.log("Component rendering, user: ", user)

  const changeName = () => {
    setUser({
      ...user, 
      name: "clark kent"
    })
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={changeName} >Change name to clark kent</button>
    </div>
  );
}