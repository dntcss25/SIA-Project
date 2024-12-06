const Shipper = require('../models/shippers.model.js');  

exports.getAllShippers = async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.json(shippers);
    } catch (error) {
        console.error('Error in getAllShippers:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.getShipperById = async (req, res) => {
    try {
        const shipper = await Shipper.findByPk(req.params.id);
        if (shipper) {
            res.json(shipper);
        } else {
            res.status(404).json({ message: 'Shipper not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createShipper = async (req, res) => {
    try {
        const newShipper = await Shipper.create(req.body);
        res.status(201).json(newShipper);
    } catch (error) {
        console.error('Error in createShipper:', error);
        res.status(400).json({ message: error.message });
    }
};

exports.updateShipper = async (req, res) => {
    try {
        const [updated] = await Shipper.update(req.body, {
            where: { ShipperID: req.params.id }
        });
        if (updated === 0) {
            res.status(404).json({ message: 'Shipper not found' });
        } else {
            const updatedShipper = await Shipper.findByPk(req.params.id);
            res.json(updatedShipper);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteShipper = async (req, res) => {
    try {
        const deleted = await Shipper.destroy({
            where: { ShipperID: req.params.id }
        });
        if (deleted === 0) {
            res.status(404).json({ message: 'Shipper not found' });
        } else {
            res.json({ message: 'Shipper deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
