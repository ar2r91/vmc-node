const express = require('express');

const api = express.Router();

const messageController = require('../controllers/message');

api.post('/message', messageController.getMessage);

module.exports = api;
