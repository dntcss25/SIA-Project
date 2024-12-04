const Category = require('../models/category.model');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error('Error in getAllCategories:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error in createCategory:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: { CategoryID: req.params.id }
    });
    if (updated === 0) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      const updatedCategory = await Category.findByPk(req.params.id);
      res.json(updatedCategory);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { CategoryID: req.params.id }
    });
    if (deleted === 0) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

