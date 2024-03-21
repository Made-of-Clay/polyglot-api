import express from 'express';
import pug from 'pug';
import { getCountries } from './getCountries.mjs';

const app = express();
const port = 3000;

/*
Home/List → /nodeapi[/index]
Detail → /nodeapi/{countryId}
*/

app.get('/', (req, res) => {
    getCountries()
        .catch(err => {
            console.error(err);
            return err;
        })
        .then(data => res.send(data));
});

app.get('/index', (req, res) => {
    res.redirect('/');
});

app.get('/country/:countryId', (req, res) => {
    // use cca3 for codes for countryId
    res.send(`Return country "${req.params.countryId}"`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
