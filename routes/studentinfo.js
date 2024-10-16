const express = require('express');
const router = express.Router();
const { getStudentInfo, createStudentInfo, updateStudentInfo, deleteStudentInfo } = require("../controllers/studentinfo.controller.js")

router.get('/', getStudentInfo);
router.post('/', createStudentInfo);
router.put('/:id', updateStudentInfo);
router.delete('/:id', deleteStudentInfo);

module.exports = router;