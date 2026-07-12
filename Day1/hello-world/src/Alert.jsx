import "./Alert.module.css"
// inline styles 
export const Alert = ({ Children, type = "success" }) => {
  return <div className={`alert ${type}`} // default is the alert and ${type} is added
  // style={{ // {{}} outer for jsx to know we're writing js and inner are for our js
  // backgroundColor: type==="success" ? "#10b981": "red", //backgroundColor in camelCase,
  // color: "black",
  // padding: "16px"
  // }}
  >
    {Children}
    </div>
}