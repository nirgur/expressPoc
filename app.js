const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middlewares/ErrorHandler');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);
app.use(errorHandler);

module.exports = app;
