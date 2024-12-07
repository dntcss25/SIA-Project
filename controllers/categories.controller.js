const Categories = require('../models/categories.model.js');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoriesById = async (req, res) => {
    try {
        const categories = await Categories.findByPk(req.params.id);
        categories ? res.status(200).json(categories) : res.status(404).json({ message: 'Category not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCategories = async (req, res) => {
    try {
        const newCategories = await Categories.create(req.body);
        res.status(201).json(newCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCategories = async (req, res) => {
    try {
        const [updated] = await Categories.update(req.body, { where: { CategoryID: req.params.id } });
        updated ? res.status(200).json(await Categories.findByPk(req.params.id)) : res.status(404).json({ message: 'Categories not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCategories = async (req, res) => {
    try {
        const deleted = await Categories.destroy({ where: { CategoryID: req.params.id } });
        deleted ? res.status(204).end() : res.status(404).json({ message: 'Categories not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};