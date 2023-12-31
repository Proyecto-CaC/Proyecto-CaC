const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemid);
router.post('/item/:id/add', shopControllers.itemidadd );
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cartpost);

module.exports = router;