const Shipper = require('../models/shippers.model.js');

exports.getAllShippers = async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.status(200).json(shippers);
    } catch (error) {
        console.error("Error retrieving shippers:", error);
        res.status(500).json({ error: 'Failed to retrieve shippers' });
    }
};

exports.getShipperById = async (req, res) => {
    try {
        const shipper = await Shipper.findOne({ where: { ShipperID: req.params.id } });
        if (shipper) {
            res.status(200).json(shipper);
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        console.error("Error fetching shipper by ID:", error);
        res.status(500).json({ error: 'The shipper could not be fetched' });
    }
};

exports.createShipper = async (req, res) => {
    try {
        const shipper = await Shipper.create(req.body);
        res.status(201).json(shipper);
    } catch (error) {
        console.error("Error creating new shipper:", error);
        res.status(500).json({ error: 'Failed to create shipper' });
    }
};

exports.updateShipper = async (req, res) => {
    try {
        const [updated] = await Shipper.update(req.body, { where: { ShipperID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Shipper successfully updated' });
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        console.error("Error updating shipper:", error);
        res.status(500).json({ error: 'Failed to update shipper' });
    }
};

exports.deleteShipper = async (req, res) => {
    try {
        const deleted = await Shipper.destroy({ where: { ShipperID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Shipper successfully deleted' });
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        console.error("Error removing shipper:", error);
        res.status(500).json({ error: 'Failed to delete shipper' });
    }
};
