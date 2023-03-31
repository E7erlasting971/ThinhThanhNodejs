const express = require('express');
const router = express.Router();
const HoaDonController = require('../controllers/HoaDons.controllers');

// GET all KhoaTaps
router.get('/getHoaDonsByHocVien', HoaDonController.getHoaDonsByHocVien);
router.get('/getHoaDons', HoaDonController.getHoaDons);
// CREATE a new hoa don
router.post('/', HoaDonController.createHoaDon);
//update trang thai hoa don
router.put('/:id', HoaDonController.updateHoaDon);

module.exports = router;