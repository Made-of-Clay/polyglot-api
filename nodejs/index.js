const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/foo', (req, res) => {
    res.send('bar');
});

app.get('/bar', (req, res) => {
    res.send('foo');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
