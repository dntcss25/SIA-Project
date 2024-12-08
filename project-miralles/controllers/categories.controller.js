const Category = require('../models/categories.model.js');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: 'The categories could not be fetched' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({ where: { CategoryID: req.params.id } });
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error("Error fetching category by ID:", error);
        res.status(500).json({ error: 'The category could not be fetched' });
    }
};


exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: 'The category could not be created' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const [updated] = await Category.update(req.body, { where: { CategoryID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'The category has been updated successfully' });
        } else {
            res.status(404).json({ error: 'The category could not be found' });
        }
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: 'The category could not be updated' });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Category.destroy({ where: { CategoryID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'The category has been deleted successfully' });
        } else {
            res.status(404).json({ error: 'The category was not found' });
        }
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: 'The category could not be deleted' });
    }
};
