var express = require('express');
var authrouter = express.Router();


authrouter.get('/dashboard', function (req, res) {
      res.render('Dashboard/index');
});

module.exports = authrouter;