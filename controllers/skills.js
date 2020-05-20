// require the skills database so the controller can access it
const Skill = require('../models/skill');

// set up index and show
function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res, next) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};

function newSkill (req, res) {
    res.render('skills/new');
};

function create (req, res) {
    Skill.create(req.body);
    res.redirect('skills');
};

// export index and show as methods on the exports object
module.exports = {
    index,
    show,
    new: newSkill, 
    create
};