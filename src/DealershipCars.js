import { cars } from "./App";

export const DealershipCars = () => {
  return (
    <div>
      <h1>Dealership Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            Make: {car.make}, Model: {car.model}, Price: {car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
