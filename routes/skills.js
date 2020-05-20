const express = require('express');
const router = express.Router();
// require the skills controller so route has access to it
const skillsCtrl = require('../controllers/skills');

// index and show methods will be the callbacks based on request 
router.get('/', skillsCtrl.index);
// GET /skills/new to see a new skill form 
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);



module.exports = router