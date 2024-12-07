const express = require('express');
const router = express.Router();
const ShippersController = require('../controllers/shippers.controller.js');

router.get('/', ShippersController.getAllShippers);
router.post('/', ShippersController.createShippers);

router.get('/:id', ShippersController.getShippersById);
router.put('/:id', ShippersController.updateShippers);
router.delete('/:id', ShippersController.deleteShippers);
module.exports = router;