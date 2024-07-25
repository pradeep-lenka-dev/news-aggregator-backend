const express = require ('express')
const router = express.Router();
const validateFields = require("../middlewares/validateUser")
const userController = require ("../controllers/userController")

router.post("/signup",validateFields(['name','email','password','preferences']),userController.registerNewUser)
router.post('/login',validateFields(['email','password']),userController.loginUser);
router.get('/preferences')
router.put('/preferences')
router.get('/news')
module.exports = router;