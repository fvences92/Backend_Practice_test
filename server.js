const express = require('express');
const getRecipeName = require ('./service')
const app = express();

app.get('/', (req, res) => {
    res.json(returnObj);
});

app.get('/recipes', (req, res) => {
    res.json(getRecipeName())
});

app.listen(3000, () => console.log ("Listening on port 3000"))