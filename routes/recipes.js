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
});

export default router;

