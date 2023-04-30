import { items, total } from "./App";

export function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.price}
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}
