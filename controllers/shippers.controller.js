const Shippers = require('../models/shippers.model');

exports.getShippers = async (req, res) => {
    try {
        const shippers = await Shippers.findAll();
        res.status(200).json(shippers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getShipperById = async (req, res) => {
    try {
        const shipper = await Shippers.findOne({ where: { ShippedID: req.params.id } });
        if (!shipper) {
            return res.status(404).json({ message: 'Shipper not found' });
        }
        res.status(200).json(shipper);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createShipper = async (req, res) => {
    try {
        const { CompanyName, Phone } = req.body;
        const shipper = await Shippers.create({ CompanyName, Phone });
        res.status(201).json(shipper);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateShipper = async (req, res) => {
    try {
        const shipper = await Shippers.update(req.body, { where: { ShippedID: req.params.id } });
        if (shipper[0] === 0) {
            return res.status(404).json({ message: 'Shipper not found' });
        }
        res.status(200).json({ message: 'Shipper updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteShipper = async (req, res) => {
    try {
        const deleted = await Shippers.destroy({ where: { ShippedID: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Shipper not found' });
        }
        res.status(200).json({ message: 'Shipper deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
