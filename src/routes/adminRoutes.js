const express = require('express');
const router = express.Router();
// const { isLogged } = require('../middlewares/login');
const {admin, create, createItem, edit, editItem, deleteItem} = require('../controllers/adminControllers');

// router.use(isLogged);
router.get('/', admin);
router.get('/create', create);
router.post('/create', createItem);
router.get('/edit/:id', edit);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);



module.exports = router;