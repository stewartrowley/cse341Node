const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Grabs all contacts in database
router.get('/', contactsController.findAllContacts);

// Grabs a contact in the database
router.get('/:id', contactsController.findContact);

// Creates contacts in the database
router.post('/', contactsController.createContacts);

// Updates a contact in the database
router.put('/:id', contactsController.updateContacts);

// Deletes a contact in the database
router.delete('/:id', contactsController.deleteContact);

module.exports = router;

