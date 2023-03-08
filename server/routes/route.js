const router = require('express').Router();

const { contact } = require('../controller/appController.js')

router.post('/contact', contact);

module.exports = router;