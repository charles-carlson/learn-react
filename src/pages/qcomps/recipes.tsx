export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientList({ingredients}:{ingredients: Set<string>}){
  const ingredientsMap = Array.from(ingredients).map((ingredients,index)=>(
    <li key={index}>{ingredients}</li>
  ))
  return <ul>{ingredientsMap}</ul>;
}

function Recipe({name, ingredients} : {name: string, ingredients: Set<string>}) {
  return (
  <div>
    <h2>{name}</h2>
      <IngredientList ingredients={ingredients} />
  </div>
  );
}
export default function RecipeList() {
  const recipeList = recipes.map((recipe)=>(
    <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}