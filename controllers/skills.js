// require the skills database so the controller can access it
const Skill = require('../models/skill');

// set up index and show
function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll(), 
        title: "Skills List"
    });
};

function show(req, res, next) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', {
        skill, 
        title: skill.skill, 
    });
};

function newSkill (req, res) {
    res.render('skills/new', {
        title: "New Skill"
    });
};

function create (req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill, 
        title: `Edit ${skill.skill}`
    });
};

function update(req, res) {
    Skill.update(req.body, req.params.id);
    res.redirect('/skills');
};

// export index and show as methods on the exports object
module.exports = {
    index,
    show,
    new: newSkill, 
    create, 
    delete: deleteSkill, 
    edit, 
    update
};