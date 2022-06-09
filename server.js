import express from 'express';
import bodyParser from 'body-parser';

import recipeRoutes from './routes/recipes.js';

const app = express();

app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.json({
        response: "Back-End Practice Assesment"
    });
});

app.listen(3000, () => console.log ("Listening on port 3000"))