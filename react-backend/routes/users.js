var express = require('express');
var router = express.Router();

//**HELP: Why does the single response not work? */

/* GET users listing. */
router.get('/', function (req, res, next) {
  data = {
    response: 'simple user get express route works'
  }
  // res.send('respond with a resource');
  res.send(data);
});

module.exports = router;
