const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/', petController.listPets);
router.post('/', petController.addPet);

module.exports = router;
