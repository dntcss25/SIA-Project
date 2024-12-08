const Supplier = require('../models/suppliers.model.js');


exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error("Error retrieving suppliers:", error);
        res.status(500).json({ error: 'Failed to retrieve suppliers' });
    }
};

exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findOne({ where: { SupplierID: req.params.id } });
        if (supplier) {
            res.status(200).json(supplier);
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error("Error fetching supplier by ID:", error);
        res.status(500).json({ error: 'The supplier could not be fetched' });
    }
};

exports.createSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        console.error("Error adding supplier:", error);
        res.status(500).json({ error: 'Failed to add supplier' });
    }
};


exports.updateSupplier = async (req, res) => {
    try {
        const [updated] = await Supplier.update(req.body, { where: { SupplierID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Supplier successfully updated' });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error("Error updating supplier:", error);
        res.status(500).json({ error: 'Failed to update supplier' });
    }
};


exports.deleteSupplier = async (req, res) => {
    try {
        const deleted = await Supplier.destroy({ where: { SupplierID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Supplier successfully deleted' });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error("Error removing supplier:", error);
        res.status(500).json({ error: 'Failed to remove supplier' });
    }
};
