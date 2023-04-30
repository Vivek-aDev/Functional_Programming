import { ClassStudents } from "./ClassStudents";
import { CompanyEmployees } from "./CompanyEmployees";
import { CookbookRecipes } from "./CookbookRecipes";
import { DealershipCars } from "./DealershipCars";
import { LibraryBooks } from "./LibraryBooks";
import { MoviesWatchlist } from "./MoviesWatchlist";
import { OnlineProducts } from "./OnlineProducts";
import { OnlineStoreProducts } from "./OnlineStoreProducts";
import { RecipeList } from "./RecipeList";
import { ShoppingCart } from "./ShoppingCart";
import "./styles.css";
import { WatchlistMovies } from "./WatchlistMovies";

export const items = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "T-Shirt", price: 15 },
  { id: 3, name: "Hat", price: 8 },
  { id: 4, name: "Sunglasses", price: 12 }
];
export const total = 45;

// question 1
export const movies = [
  { id: 1, title: "Lagaan ", dircetor: "Ashutosh Gowariker" },
  { id: 2, title: "DDLJ", dircetor: "Aditya Chopra" },
  { id: 3, title: "Sholay", dircetor: "Ramesh Sippy" },
  { id: 4, title: "Mughal-e-Azam ", dircetor: "K. Asif " },
  { id: 5, title: "Black ", dircetor: "Sanjay Leela Bhansali" }
];

// question 2
export const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: 999,
    category: "Electronics"
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 249,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    price: 150,
    category: "Footwear"
  },
  {
    id: 4,
    name: "Columbia Men’s Steens Mountain Full Zip Fleece",
    price: 60,
    category: "Clothing"
  },
  {
    id: 5,
    name: "Fitbit Charge 5",
    price: 179,
    category: "Fitness"
  }
];

// question 3
export const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.5
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 4.7
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.2
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.6
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 4.1
  }
];

// question 4
export const employees = [
  {
    id: 1,
    name: "John Smith",
    department: "Marketing",
    salary: 50000
  },
  {
    id: 2,
    name: "Mary Johnson",
    department: "Human Resources",
    salary: 60000
  },
  {
    id: 3,
    name: "Robert Lee",
    department: "Finance",
    salary: 80000
  },
  {
    id: 4,
    name: "Emily Chen",
    department: "Information Technology",
    salary: 90000
  },
  {
    id: 5,
    name: "David Kim",
    department: "Sales",
    salary: 70000
  }
];

// question 5
export const recipesList = [
  {
    id: 1,
    recipeName: "Spaghetti Carbonara",
    creatorName: "Giada De Laurentiis"
  },
  {
    id: 2,
    recipeName: "Chicken Tikka Masala",
    creatorName: "Madhur Jaffrey"
  },
  {
    id: 3,
    recipeName: "Classic Lasagna",
    creatorName: "Ina Garten"
  },
  {
    id: 4,
    recipeName: "Beef Bourguignon",
    creatorName: "Julia Child"
  },
  {
    id: 5,
    recipeName: "Tandoori Chicken",
    creatorName: "Sanjeev Kapoor"
  }
];

// question 6
export const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    price: 20000
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    price: 22000
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    price: 35000
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    price: 37000
  },
  {
    id: 5,
    make: "BMW",
    model: "3 Series",
    price: 45000
  }
];

// question 7
export const students = [
  {
    id: 1,
    name: "John Smith",
    grade: 10,
    attendance: 90
  },
  {
    id: 2,
    name: "Jane Doe",
    grade: 9,
    attendance: 95
  },
  {
    id: 3,
    name: "Robert Lee",
    grade: 12,
    attendance: 85
  },
  {
    id: 4,
    name: "Emily Chen",
    grade: 11,
    attendance: 92
  },
  {
    id: 5,
    name: "David Kim",
    grade: 10,
    attendance: 87
  }
];

// question 8
export const watchlistMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    runtime: 142
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    runtime: 175
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    runtime: 152
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    director: "Peter Jackson",
    runtime: 178
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    runtime: 154
  }
];

// question 9
export const onlineStoreProducts = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 999,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Fitbit Charge 5",
    price: 179,
    category: "Wearable Technology"
  },
  {
    id: 3,
    name: "Instant Pot Duo Nova",
    price: 99,
    category: "Kitchen Appliances"
  },
  {
    id: 4,
    name: "Kindle Paperwhite",
    price: 129,
    category: "Electronics"
  },
  {
    id: 5,
    name: "Nike Air Zoom Pegasus 38",
    price: 120,
    category: "Sports & Outdoors"
  }
];

// question 10
export const recipes = [
  {
    id: 1,
    name: "Spaghetti with Meatballs",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 cup breadcrumbs",
      "1 egg",
      "1/4 cup chopped parsley",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup milk",
      "1/2 teaspoon salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 teaspoon sugar",
      "1/4 teaspoon red pepper flakes",
      "1/4 cup chopped fresh basil"
    ],
    instructions: [
      "1. Cook the spaghetti according to package instructions until al dente.",
      "2. In a large bowl, combine the ground beef, breadcrumbs, egg, parsley, Parmesan, milk, salt, and pepper. Mix until well combined and form into meatballs.",
      "3. In a large skillet, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.",
      "4. Add the crushed tomatoes, sugar, and red pepper flakes. Bring to a simmer and add the meatballs. Cover and simmer for 15-20 minutes, until the meatballs are cooked through.",
      "5. Serve the meatballs and sauce over the cooked spaghetti. Garnish with fresh basil."
    ]
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon salt",
      "1 cup unsalted butter, at room temperature",
      "3/4 cup white sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "2 cups semisweet chocolate chips"
    ],
    instructions: [
      "1. Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper.",
      "2. In a medium bowl, whisk together the flour, baking soda, and salt.",
      "3. In a large bowl, beat together the butter, white sugar, and brown sugar until light and fluffy, about 2-3 minutes.",
      "4. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
      "5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
      "6. Stir in the chocolate chips.",
      "7. Drop the dough by rounded tablespoons onto the prepared baking sheet, spacing the cookies about 2 inches apart.",
      "8. Bake for 10-12 minutes, until the edges are golden brown and the centers are set.",
      "9. Cool the cookies on the baking sheet for 5 minutes, then transfer to a wire rack to cool completely."
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <hr />
      <MoviesWatchlist />
      <hr />
      <OnlineProducts />
      <hr />
      <LibraryBooks />
      <hr />
      <CompanyEmployees />
      <hr />
      <CookbookRecipes />
      <hr />
      <DealershipCars />
      <hr />
      <ClassStudents />
      <hr />
      <WatchlistMovies />
      <hr />
      <OnlineStoreProducts />
      <hr />
      <RecipeList />
    </div>
  );
}
