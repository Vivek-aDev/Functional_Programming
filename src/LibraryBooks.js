import { books } from "./App";

export function LibraryBooks() {
  return (
    <div>
      <h1>Library Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span style={{ color: "blue" }}>{book.title}</span>, Author:
            {book.author}, Rating:{book.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
