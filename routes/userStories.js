const express = require('express');
const router = express.Router();

const controller = require('../controllers/userStories');

/* GET user stories listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.get('/getUserByRole', controller.getByColumn);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.edit);
router.patch('/validate/:id', controller.validate);
router.delete('/:id', controller.destroy);

module.exports = router;

