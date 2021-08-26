const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');
const auth = require('../../utils/auth');

router.get('/profile', auth.isAuthunticated, UsersController.getProfile);

module.exports = router;
