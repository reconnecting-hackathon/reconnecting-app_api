const express = require('express');
const Router = express.Router();

const wedding = require('../controllers/Wedding');



Router.get('/', wedding.getAll);

Router.get('/:name', wedding.getPersonsPictures);

module.exports = Router;