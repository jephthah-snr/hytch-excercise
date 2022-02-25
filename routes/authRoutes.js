const express = require('express');
const router = express.Router();
const {Signin, Register} = require('../controllers/authcontrollers')


router.route('/login').post(Signin)

router.route('/register').post(Register)

module.exports = router