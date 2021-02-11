const express = require('express');
const router = express.Router();
const cookieController = require('./cookie.controller');

router.get('/', cookieController.getCookie);

module.exports = router;