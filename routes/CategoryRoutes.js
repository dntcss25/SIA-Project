const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
    try {
        console.log('Fetching all categories...');
        const categories = await Category.findAll();
        console.log('Categories fetched:', categories.map(c => c.toJSON())); 
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
    try {
        console.log(`Fetching category with ID: ${req.params.id}`);
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        console.log('Category found:', category.toJSON()); 
        res.json(category);
    } catch (error) {
        console.error('Error fetching category by ID:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// POST a new category
router.post('/', async (req, res) => {
    try {
        console.log('Creating new category with data:', req.body);
        const category = await Category.create(req.body);
        console.log('New category created:', category.toJSON()); 
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// PUT (update) a category by ID
router.put('/:id', async (req, res) => {
    try {
        console.log(`Updating category with ID: ${req.params.id} with data:`, req.body);
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        await category.update(req.body);
        console.log('Category updated:', category.toJSON()); 
        res.json(category);
    } catch (error) {
        console.error('Error updating category:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
    try {
        console.log(`Deleting category with ID: ${req.params.id}`);
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        await category.destroy();
        console.log('Category deleted successfully');
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
