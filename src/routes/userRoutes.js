// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.get('/liste', protect, userController.getAll);
router.get('/:id', protect, userController.getById);

module.exports = router;