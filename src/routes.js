const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.save);
routes.get('/boxes/:id', BoxController.findById);
routes.get('/boxes', BoxController.findAll);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.save);


module.exports = routes;