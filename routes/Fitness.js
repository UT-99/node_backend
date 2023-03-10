const express = require ('express');
const fitnessApi = require('../Api/Fitness')


const fit = express.Router();
fit.route('/Fitness').get(fitnessApi.apiController);

module.exports = fit ; 