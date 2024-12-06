const Supplier = require('../models/suppliers.model.js');

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error("Error fetching suppliers:", error);
        res.status(500).json({ error: 'Could not fetch suppliers' });
    }
};

// Create a new supplier
exports.createSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        console.error("Error creating supplier:", error);
        res.status(500).json({ error: 'Could not create supplier' });
    }
};

// Update an existing supplier
exports.updateSupplier = async (req, res) => {
    try {
        const [updated] = await Supplier.update(req.body, { where: { SupplierID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Supplier updated successfully' });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error("Error updating supplier:", error);
        res.status(500).json({ error: 'Could not update supplier' });
    }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
    try {
        const deleted = await Supplier.destroy({ where: { SupplierID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Supplier deleted successfully' });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        console.error("Error deleting supplier:", error);
        res.status(500).json({ error: 'Could not delete supplier' });
    }
};
