const express = require('express');
const bodyParser = require('body-parser');
const { mongoConnect } = require('./Utils/database');
const path = require('path');

const app = express();

// ~~~~~~~ ROUTES ~~~~~~~//
const proposalRoute = require('./Routes/proposals');
// ~~~~~~~~~~~~~~~~~~~~~//

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/proposal', proposalRoute);

mongoConnect(() => {
    app.listen(3000);
})