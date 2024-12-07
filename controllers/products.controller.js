const Products = require('../models/products.model.js');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductsById = async (req, res) => {
    try {
        const products = await Products.findByPk(req.params.id);
        products ? res.status(200).json(products) : res.status(404).json({ message: 'Products not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProducts = async (req, res) => {
    try {
        const newProducts = await Products.create(req.body);
        res.status(201).json(newProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProducts = async (req, res) => {
    try {
        const [updated] = await Products.update(req.body, { where: { ProductID: req.params.id } });
        updated ? res.status(200).json(await Products.findByPk(req.params.id)) : res.status(404).json({ message: 'Products not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProducts = async (req, res) => {
    try {
        const deleted = await Products.destroy({ where: { ProductID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Products not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};