const express = require('express');
const router = express.Router();
const controllers = require('../controllers/hello.controllers');
const { check } = require('express-validator')
const withValidation = require('../middlewares/withValidation');

const validationSchema = [check('testString')
  .isString()
  .isAlphanumeric().withMessage('Must be alphanumeric')
  .isLength({min: 2, max: 10}).withMessage('Length must be between 2-10')
  .exists()
]

router.get('/:testString', withValidation(validationSchema), controllers.getHello)

module.exports = router;
