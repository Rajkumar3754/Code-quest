const express = require('express');
const router = express.Router();
const { getContact, postContact, getallContact, putContact, deleteContact } = require('../controller/contactController');

router.route('/').get(getContact).post(postContact);
router.route('/:id').get(getallContact).put(putContact).delete(deleteContact);

module.exports = router;
