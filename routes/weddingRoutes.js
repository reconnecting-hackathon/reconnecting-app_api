const express = require('express');
const Router = express.Router();

const wedding = require('../controllers/Wedding');



Router.get('/', wedding.getAll);

module.exports = Router;