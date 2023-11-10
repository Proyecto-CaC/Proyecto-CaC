const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.crearadmin);
router.post('/admin/create', adminControllers.crearadminpost);
router.get('/admin/edit/:id', adminControllers.editar);
router.put('/admin/edit/:id', adminControllers.editarid)
router.delete('/admin/delete/:id', adminControllers.eliminarid);

module.exports = router;