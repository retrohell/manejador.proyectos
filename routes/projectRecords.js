const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectRecords');

/* GET project records listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;

