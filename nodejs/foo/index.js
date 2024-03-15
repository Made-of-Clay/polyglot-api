const express = require('express');
const router = express.Router();
console.log('--------------')
// module.exports = () => {
    router.get('/foo', (req, res) => {
        console.log(req.query)
        res.send('bar');
    });
// };

/**
 * @typedef {object} showRequestBody
 * @property {string} name this is name in request body
 * @property {number} age this is age in request body
 * 
 * @typedef {object} showRequestQuery
 * @property {string} name this is name in query
 * @property {number} age this is age in query
 * 
 * @param {import('express').Request<{}, {}, showRequestBody, showRequestQuery>} req
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const fn = (req, res) => {
    req.query.age
}