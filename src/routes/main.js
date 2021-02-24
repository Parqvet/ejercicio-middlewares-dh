const { Router } = require('express');
const router = Router();

const userMiddleware = require('../middlewares/userMiddleware');

const { index, admin } = require('../controllers/mainController');

router.get('/', index);
router.get('/admin', userMiddleware, admin);

module.exports = router;