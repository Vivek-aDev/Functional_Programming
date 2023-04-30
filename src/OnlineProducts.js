import { products } from "./App";

export function OnlineProducts() {
  return (
    <div>
      <h1>Online Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span style={{ color: "green" }}>{product.name}</span>, Price:
            {product.price}, Category: {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
