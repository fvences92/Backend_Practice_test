const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));


function getRecipeName() {
  const recipes = obj.recipes;

  const recipeNames = recipes.map((recipe) => recipe.name);

  return {
    recipes: recipeNames
  }
};

module.exports = getRecipeName