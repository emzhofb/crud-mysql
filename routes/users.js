var express = require('express');
var router = express.Router();
const models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Siswa.findAll().then(siswas => {
    
  }).catch(err => {
    
  })
  res.send('respond with a resource');
});

module.exports = router;
