import { recipesList } from "./App";

export function CookbookRecipes() {
  return (
    <div>
      <h1>Cookbook Recipes</h1>
      <ul>
        {recipesList.map((recipe) => (
          <li key={recipe.id}>
            <span style={{ color: "olive" }}>
              RecipeName: {recipe.recipeName}
            </span>
            , CreatorName: {recipe.creatorName}
          </li>
        ))}
      </ul>
    </div>
  );
}
