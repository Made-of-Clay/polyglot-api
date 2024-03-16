import express from 'express';
import pug from 'pug';
import http from 'http';
import fetch from 'node-fetch';
import mcache from 'memory-cache';

const app = express();
const port = 3000;

function cache(durationSeconds) {
    return (req, res, next) => {
        const cacheKey = req.originalUrl || req.url;
        const cachedResponse = mcache.get(cacheKey);
        if (cachedResponse) {
            console.log('========= load from cache')
            res.send(cachedResponse);
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                mcache.put(cacheKey, body, durationSeconds * 1000);
                res.sendResponse(body);
            };
        }
        next();
    }
}

/*
Home/List → /nodeapi[/index]
Detail → /nodeapi/{countryId}
*/

app.get('/', cache(10), (req, res) => {
    fetch('https://restcountries.com/v3.1/all')
        // .then(r => {
        //     r.json().then(console.log)
        //     res.send(r);
        // })
        .then(r => r.json())
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        // .then(data => {
        //     res.send(data);
        // })
        .catch(err => res.send(err));
});

app.get('/index', (req, res) => {
    res.redirect('/');
});

app.get('/country/:countryId', (req, res) => {
    // use cca3 for codes for countryId
    res.send(`Return country "${req.params.countryId}"`);
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
