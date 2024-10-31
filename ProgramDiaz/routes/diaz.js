var express = require('express');
var router = express.Router();

const BukuController = require('../controller/buku');
const buku = require('../model/buku');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari buku router');
// });

//format JSON
router.post('/', BukuController.createBuku);

router.get('/', BukuController.readBuku);

router.delete('/:id', BukuController.deleteBuku);

router.put('/:id', BukuController.updateBuku);

module.exports = router;