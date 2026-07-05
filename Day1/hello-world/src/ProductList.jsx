export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "laptop",
      price: 999,
    },
    {
      id: 2,
      name: "Phone",
      price: 450,
    },
  ];

  // it's  better to do so
  //you can also filter them
  const productElements = products
    .filter((product) => {
      return product.price > 500;
    })
    .map((product) => {
      return (
        <div key = {product.id}>  //or you can use crypto.randomUUID
          <h3>{product.name}</h3>
          <p>Price ${product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Products</h2>
      {productElements}
    </div>
  );
};
