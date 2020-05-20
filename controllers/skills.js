// require the skills database so the controller can access it
const skillsDb = require('../models/skill');

// set up index and show
function index(req, res, next) {
    res.render('skills/index', {
        skills: skillsDb.getAll()
    });
};

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillsDb.getOne(req.params.id)
    });
};

function newSkill (req, res) {
    res.render('skills/new');
};

function create (req, res) {
    // console.log("skill: ", req.params.skill);
    // console.log("furtherInfo: ", req.params.furtherInfo);
    console.log("body: ", req.body);
};

// export index and show as methods on the exports object
module.exports = {
    index,
    show,
    new: newSkill, 
    create
};