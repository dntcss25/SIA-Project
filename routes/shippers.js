const express = require('express');
const router = express.Router();
const ShipperController = require('../controllers/shippers.controller.js');

router.get('/', ShipperController.getAllShippers);
router.get('/:id', ShipperController.getShipperById);
router.post('/', ShipperController.createShipper);
router.put('/:id', ShipperController.updateShipper); 
router.delete('/:id', ShipperController.deleteShipper);

module.exports = router;
