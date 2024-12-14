const Supplier = require('../models/supplier.model');

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    console.error('Error in getAllSuppliers:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (error) {
    console.error('Error in createSupplier:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const [updated] = await Supplier.update(req.body, {
      where: { SupplierID: req.params.id }
    });
    if (updated === 0) {
      res.status(404).json({ message: 'Supplier not found' });
    } else {
      const updatedSupplier = await Supplier.findByPk(req.params.id);
      res.json(updatedSupplier);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const deleted = await Supplier.destroy({
      where: { SupplierID: req.params.id }
    });
    if (deleted === 0) {
      res.status(404).json({ message: 'Supplier not found' });
    } else {
      res.json({ message: 'Supplier deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

