const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.findAllContacts);

router.get('/:id', contactsController.findContact);

module.exports = router;

