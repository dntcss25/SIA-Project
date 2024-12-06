const Shipper = require('../models/shippers.model.js');

// Get all shippers
exports.getAllShippers = async (req, res) => {
    try {
        const shippers = await Shipper.findAll();
        res.status(200).json(shippers);
    } catch (error) {
        console.error("Error fetching shippers:", error);
        res.status(500).json({ error: 'Could not fetch shippers' });
    }
};

// Create a new shipper
exports.createShipper = async (req, res) => {
    try {
        const shipper = await Shipper.create(req.body);
        res.status(201).json(shipper);
    } catch (error) {
        console.error("Error creating shipper:", error);
        res.status(500).json({ error: 'Could not create shipper' });
    }
};

// Update an existing shipper
exports.updateShipper = async (req, res) => {
    try {
        const [updated] = await Shipper.update(req.body, { where: { ShipperID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Shipper updated successfully' });
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        console.error("Error updating shipper:", error);
        res.status(500).json({ error: 'Could not update shipper' });
    }
};

// Delete a shipper
exports.deleteShipper = async (req, res) => {
    try {
        const deleted = await Shipper.destroy({ where: { ShipperID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Shipper deleted successfully' });
        } else {
            res.status(404).json({ error: 'Shipper not found' });
        }
    } catch (error) {
        console.error("Error deleting shipper:", error);
        res.status(500).json({ error: 'Could not delete shipper' });
    }
};
