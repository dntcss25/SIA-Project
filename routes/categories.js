const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categories.controller.js');

router.get('/', CategoriesController.getAllCategories);
router.post('/', CategoriesController.createCategories);

router.get('/:id', CategoriesController.getCategoriesById);
router.put('/:id', CategoriesController.updateCategories);
router.delete('/:id', CategoriesController.deleteCategories);
module.exports = router;