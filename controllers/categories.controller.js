const Categories = require('../models/categories.model');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Categories.findOne({ where: { CategoryID: req.params.id } });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const { CategoryName, Description, Picture } = req.body;
        const category = await Categories.create({ CategoryName, Description, Picture });
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Categories.update(req.body, { where: { CategoryID: req.params.id } });
        if (category[0] === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Categories.destroy({ where: { CategoryID: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};