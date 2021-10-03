var express = require('express');
var router = express.Router();

var cliente = require('../controllers/ClienteController.js');

router.get('/', cliente.list);
router.get('/show/:id', cliente.show);
router.get('/create', cliente.create);
router.post('/save', cliente.save);
router.get('/edit/:id', cliente.edit);
router.post('/update/:id', cliente.update);
router.post('/delete/:id', cliente.delete);

module.exports = router;