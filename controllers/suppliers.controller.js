const Suppliers = require('../models/suppliers.model.js');

exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSuppliersById = async (req, res) => {
    try {
        const suppliers = await Suppliers.findByPk(req.params.id);
        suppliers ? res.status(200).json(suppliers) : res.status(404).json({ message: 'Suppliers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createSuppliers = async (req, res) => {
    try {
        const newSuppliers = await Suppliers.create(req.body);
        res.status(201).json(newSuppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSuppliers = async (req, res) => {
    try {
        const [updated] = await Suppliers.update(req.body, { where: { SupplierID: req.params.id } });
        updated ? res.status(200).json(await Suppliers.findByPk(req.params.id)) : res.status(404).json({ message: 'Suppliers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSuppliers = async (req, res) => {
    try {
        const deleted = await Suppliers.destroy({ where: { SupplierID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Suppliers not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};