const express = require('express');
const router = express.Router();

const controller = require('../controllers/controlPanels');

/* GET control panels listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);
router.patch('/:id', controller.close);

module.exports = router;

