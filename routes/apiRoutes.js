const express = require('express');
const Router = express.Router();

const api = require('../controllers/ApiController');



Router.post('/contacts', api.insertContact);

Router.get('/:name', api.getPersonsPictures);

module.exports = Router;