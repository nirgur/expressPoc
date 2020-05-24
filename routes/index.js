const express = require('express');
const router = express.Router();

const hello = require('./hello.routes')
const todos = require('./todos.routes')

router.use('/hello', hello)
router.use('/todos', todos)

module.exports = router;
