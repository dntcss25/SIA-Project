const Shippers = require('../models/shippers.model.js');

exports.getAllShippers = async (req, res) => {
    try {
        const shippers = await Shippers.findAll();
        res.status(200).json(shippers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getShippersById = async (req, res) => {
    try {
        const shippers = await Shippers.findByPk(req.params.id);
        shippers ? res.status(200).json(shippers) : res.status(404).json({ message: 'Shippers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createShippers = async (req, res) => {
    try {
        const newShippers = await Shippers.create(req.body);
        res.status(201).json(newShippers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateShippers = async (req, res) => {
    try {
        const [updated] = await Shippers.update(req.body, { where: { ShipperID: req.params.id } });
        updated ? res.status(200).json(await Shippers.findByPk(req.params.id)) : res.status(404).json({ message: 'Shippers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteShippers = async (req, res) => {
    try {
        const deleted = await Shippers.destroy({ where: { ShipperID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Shippers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};