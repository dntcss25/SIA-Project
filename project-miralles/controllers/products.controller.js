const Product = require('../models/products.model.js');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'Could not fetch products' });
    }
};


exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: 'Could not create product' });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const [updated] = await Product.update(req.body, { where: { ProductID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: 'Could not update product' });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({ where: { ProductID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: 'Could not delete product' });
    }
};
