const express = require('express');
const router = express.Router();
const controllers = require('../controllers/todos.controllers');
const { body, param } = require('express-validator')
const withValidation = require('../middlewares/withValidation');

const bodySchema = [
  body('title')
  .isString()
  .exists(),
  body('done')
    .isBoolean().withMessage("Must be a boolean")
    .exists()
]

const paramsSchema = [
  param('id')
  .isNumeric().withMessage("Must be a number")
  .exists(),
]

router.post('/', withValidation(bodySchema), controllers.create)
router.get('/', controllers.getAll)
router.put('/:id', withValidation([...bodySchema, ...paramsSchema]), controllers.update)
router.delete('/:id', withValidation(paramsSchema), controllers.delete)

module.exports = router;
