import express from 'express';
import fs from 'fs';
const obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

const router = express.Router();

router.get('/', (req, res) => {    
    
    const recipes = obj.recipes;
    const recipeNames = recipes.map((recipe) => recipe.name);
    
    res.send ({
        recipeNames: recipeNames 
    })  

    res.status(200);
});

router.get('/details/:name', (req, res) => {
    const recipes = obj.recipes;
    let count = 0;
    const recipe = recipes.find(r => r.name === req.params.name);
    
    const output = {
      details: {
        ingredients: recipe.ingredients,
        numSteps: recipe.instructions.length
      }
    };
    
    res.status(200).send(output);
  })
  

export default router;

