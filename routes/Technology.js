const express = require ('express');
const techapi = require('../Api/Technology')


const tech = express.Router();
tech.route('/Technology').get(techapi.apiController);

module.exports = tech ; 