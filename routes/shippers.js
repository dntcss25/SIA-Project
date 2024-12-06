const express = require('express');
const router = express.Router();
const {
    getShippers,
    getShipperById,
    createShipper,
    updateShipper,
    deleteShipper
} = require('../controllers/shippers.controller');

// Routes for shippers
router.get('/', getShippers);
router.get('/:id', getShipperById);
router.post('/', createShipper);
router.put('/:id', updateShipper);
router.delete('/:id', deleteShipper);

module.exports = router;
