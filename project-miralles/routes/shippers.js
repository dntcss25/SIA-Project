const express = require('express');
const router = express.Router();
const shipperController = require('../controllers/shippers.controller.js');

router.get('/shippers', shipperController.getAllShippers);
router.post('/shippers', shipperController.createShipper);
router.put('/shippers/:id', shipperController.updateShipper);
router.delete('/shippers/:id', shipperController.deleteShipper);

module.exports = router;
