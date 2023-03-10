const express = require ('express');
const foodApi = require('../Api/Food')


const food = express.Router();
food.route('/Food').get(foodApi.apiController);

module.exports = food ; 