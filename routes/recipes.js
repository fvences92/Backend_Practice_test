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
        console.log(recipeNames)

    res.status(200);
});

router.get('/details/:name', (req, res) => {
    const recipes = obj.recipes;
    let count = 0;
    const recipe = recipes.find(r => r.name === req.params.name);
    
    const detail = {
      details: {
        ingredients: recipe.ingredients,
        numSteps: recipe.instructions.length
      }
    };
    
    res.status(200).send(detail);
  })
  
router.post ('/', (req, res) => {
    const recipes = obj.recipes;
    
    if (req.body.completed = true) 
    recipes.push(req.body)
    else { 
        res.json("error: Recipe already exists!")
}

})


router.put("/details/:name", (req, res) => {
    if (req.body.completed = true)
    res.send(req.body)

    else {
        req.body.completed = false
        res.json("error: Recipe does not exist")
    }
})


export default router;