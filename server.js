//DEPENDCIES//
const express = require('express');

//APPLICATION OBJECT//
const app = express();

//DATA// 

//ROUTES//

app.get('/', (req, res) => {
    res.json({
        response: "Hello World"
    });
});

// LISTENER // 
app.listen(1992, () => console.log ("Listening on port 1992"))