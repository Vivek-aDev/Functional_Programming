import { onlineStoreProducts } from "./App";

export function OnlineStoreProducts() {
  return (
    <div>
      <h1>Online Store Products</h1>
      <ol>
        {onlineStoreProducts.map((item) => (
          <li key={item.id}>
            <span style={{ color: "darkgrey" }}>Name: {item.name}, </span>Price:{" "}
            {item.price}, Category:{item.category}
          </li>
        ))}
      </ol>
    </div>
  );
}
