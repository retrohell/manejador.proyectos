const express = require('express');
const router = express.Router();

const controller = require('../controllers/skills');

/* GET skills listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.delete('/:id', controller.destroy);

module.exports = router;
