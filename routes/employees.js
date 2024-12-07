const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees.controller.js');

router.get('/', EmployeesController.getAllEmployees);
router.post('/', EmployeesController.createEmployees);

router.get('/:id', EmployeesController.getEmployeesById);
router.put('/:id', EmployeesController.updateEmployees);
router.delete('/:id', EmployeesController.deleteEmployees);
module.exports = router;