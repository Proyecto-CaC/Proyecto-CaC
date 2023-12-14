const express = require('express');
const router = express.Router();

const {login, loginPost, register, registerPost, logout} = require('../controllers/authControllers');

router.get('/login',login);
router.post('/login',(req, res) => loginPost);
router.get('/register',register);
router.post('/register',(req, res) => registerPost);
router.get('/logout',logout);


module.exports = router;