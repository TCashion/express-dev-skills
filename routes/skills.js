const express = require('express');
const router = express.Router();
// require the skills controller so route has access to it
const skillsCtrl = require('../controllers/skills');

// index and show methods will be the callbacks based on request 
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router