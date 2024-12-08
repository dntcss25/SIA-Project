const Product = require('../models/products.model.js');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'The products could not be retrieved' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { ProductID: req.params.id } });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ error: 'The product could not be fetched' });
    }
};


exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: 'The product could not be created.' });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const [updated] = await Product.update(req.body, { where: { ProductID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'The product has been updated successfully.' });
        } else {
            res.status(404).json({ error: 'The product could not be found.' });
        }
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: 'The product could not be updated.' });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({ where: { ProductID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'The product has been deleted successfully.' });
        } else {
            res.status(404).json({ error: 'The product was not found.' });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: 'The product could not be deleted' });
    }
};
