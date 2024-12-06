const Category = require('../models/categories.model.js');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: 'Could not fetch categories' });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: 'Could not create category' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const [updated] = await Category.update(req.body, { where: { CategoryID: req.params.id } });
        if (updated) {
            res.status(200).json({ message: 'Category updated successfully' });
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: 'Could not update category' });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Category.destroy({ where: { CategoryID: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: 'Category deleted successfully' });
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: 'Could not delete category' });
    }
};
