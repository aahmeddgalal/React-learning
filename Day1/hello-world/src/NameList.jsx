export const NameList  = () => {
  const names = ["Ahmed", "Galal", "Donya"]
  const nameList = names.map((name, index) => <h2 key = {index} >{name}</h2>)

  return <div>{nameList}</div>
}

// you can use the name as a key, it works, until you have duplicates
//the map fun gives us an index param