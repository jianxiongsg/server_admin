var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('loginway', { title: '登录方式管理' });
});

module.exports = router;
