const Suppliers = require('../models/suppliers.model');

exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Suppliers.findOne({ where: { SupplierID: req.params.id } });
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createSupplier = async (req, res) => {
    try {
        const { CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax, HomePage } = req.body;
        const supplier = await Suppliers.create({ CompanyName, ContactName, ContactTitle, Address, City, Region, PostalCode, Country, Phone, Fax, HomePage });
        res.status(201).json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateSupplier = async (req, res) => {
    try {
        const supplier = await Suppliers.update(req.body, { where: { SupplierID: req.params.id } });

        if (supplier[0] === 0) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json({ message: 'Supplier updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await Suppliers.destroy({ where: { SupplierID: req.params.id } });

        if (supplier === 0) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};