
const express = require('express');
const router = express.Router();

var rentsCtrl = require('../../controllers/api/rents');

router.get('/', rentsCtrl.index);
router.get('/new', rentrsCtrl.new);
router.post('/', rentsCtrl.create);
router.get('/:id', rentsCtrl.show);
router.delete('/:id', rentsCtrl.delete);
router.get('/:id/edit', rentsCtrl.edit);
router.put('/:id', rentsCtrl.update);


module.exports = router;