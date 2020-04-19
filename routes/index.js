var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Hi There! Just don\'t waste your time here. We have already wasted plenty to make it tough.');
});

module.exports = router;