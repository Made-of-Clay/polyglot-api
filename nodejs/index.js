const express = require('express');
const pug = require('pug');
// const foo = require('./foo');
const app = express();
const port = 3000;

/*
Home/List → /nodeapi[/index]
Detail → /nodeapi/{countryId}
*/

app.get('/', (req, res) => {
    res.send('Return list of countries');
});

app.get('/index', (req, res) => {
    res.redirect('/')
});

app.get('/{countryId}', (req, res) => {
    // use cca3 for codes for countryId
    res.send('Return list of countries');
});

// require('./foo');
// console.log('foo module', foo)
// foo();
// app.get('/foo', (req, res) => {
//     console.log(req.query)
//     res.send('bar');
// });

app.get('/bar', (req, res) => {
    res.send('foo');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
