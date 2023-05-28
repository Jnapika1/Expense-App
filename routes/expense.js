const path = require('path');


const express = require('express');

const expenseController = require('../controllers/expenseRecord');

const router = express.Router();

router.get('/', expenseController.getExpenses);

router.post('/', expenseController.postExpense);

router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
