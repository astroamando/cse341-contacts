const express = require('express');

const router = express.Router();

const contactsController = require('../controllers/contactsController');

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET one contact by ID
router.get('/:id', contactsController.getContactById);

// POST - create a new contact
router.post('/', contactsController.createContact);

// PUT - update a contact
router.put('/:id', contactsController.updateContact);

// DELETE - delete a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;