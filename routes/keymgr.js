var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('keymgr', { title: 'key管理' });
});

module.exports = router;
