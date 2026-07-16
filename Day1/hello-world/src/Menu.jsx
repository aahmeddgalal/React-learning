import { MenuItem } from "./MenuItem";
export const Menu = () => {

  const handleOrder = (itemName, itemPrice) => {
    alert(`You ordered ${itemName} for ${itemPrice}`)
  }

  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="Pizza" price={12} onOrder={handleOrder} />
      <MenuItem name="B" price={7} onOrder={handleOrder} />
      <MenuItem name="V" price={2} onOrder={handleOrder} />
    </div>
  );
}