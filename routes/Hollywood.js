const express = require ('express');
const hollyApi = require('../Api/Hollywood')


const holly = express.Router();
holly.route('/Hollywood').get(hollyApi.apiController);

module.exports = holly ; 