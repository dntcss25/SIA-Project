const Product = require('../models/Product');
const router = require('express').Router();

// Validation function
const validateProduct = (product) => {
    const { ProductName, Price, StockQuantity } = product;
    if (!ProductName || !Price || !StockQuantity) {
        return 'ProductName, Price, and StockQuantity are required';
    }
    return null;
};

// GET all products
router.get('/', async (req, res) => {
    try {
        const product = await Product.findAll();
        res.json(product);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error.message);
        res.status(500).json({ error: 'Error fetching product' });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    console.log('Incoming Request Body:', req.body);

    // Validate the data
    const validationError = validateProduct(req.body);
    if (validationError) {
        console.log('Validation Error:', validationError); 
        return res.status(400).json({ message: validationError });
    }

    try {
        // Create a new product in the database
        const product = await Product.create(req.body);
        console.log('Product Created:', product); 
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ error: 'Error creating product' });
    }
});
// PUT (update) a product by ID
router.put('/:id', async (req, res) => {
    const validationError = validateProduct(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        await product.update(req.body);
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error.message);
        res.status(500).json({ error: 'Error updating product' });
    }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
    const productId = req.params.id; 
    console.log(`DELETE request received for ProductID: ${productId}`); 

    try {
 
        const product = await Product.findByPk(productId);
        if (!product) {
            console.log(`Product with ID ${productId} not found`); 
            return res.status(404).json({ message: `Product with ID ${productId} not found` });
        }
        console.log(`Deleting product with ID ${productId}`); 
        await product.destroy();
        res.json({ message: `Product with ID ${productId} deleted successfully` });
        
    } catch (error) {

        console.error('Error deleting product:', error.message);
        res.status(500).json({ error: 'Error deleting product' });
    }
});


module.exports = router;
