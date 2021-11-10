const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authcontroller');  


router.post('/register',authController.register); 
// router.post('/register',authController.register.bind(authController.register))
router.post('/login', authController.login);


module.exports=router