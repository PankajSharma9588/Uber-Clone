const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usercontroller = require('../controllers/usercontroller');
const authmiddleware = require('../middleware/authmiddleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 Characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 Characters')
], usercontroller.registerUser );
router.post('/login',[body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 Characters')],
    usercontroller.loginUser);
router.get('/profile',authmiddleware.authUser,usercontroller.getUserProfile);
router.get('/logout',authmiddleware.authUser,usercontroller.logoutUser);
module.exports = router;