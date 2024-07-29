const express = require ('express')
const router = express.Router();
const validateFields = require("../middlewares/validateUser")
const authenticate  = require("../middlewares/authenticate")
const userController = require ("../controllers/userController")
const newscontroller = require ("../controllers/newsController")

//users routers
router.post('/users/signup',validateFields(['name','email','password','preferences']),userController.registerNewUser)
router.post('/users/login',validateFields(['email','password']),userController.loginUser);
router.get('/preferences',authenticate,userController.getPreferences)
router.put('/preferences',authenticate,userController.updatePrefrence)

//news routers
router.get('/news',authenticate,newscontroller.getNews)

module.exports = router;