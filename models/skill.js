// set up data as an array of objects
const skills = [
    {id: 0, skill: "HTML", learnedAt: "General Assembly", furtherInfo: "HTML is like the 'scaffolding' for web pages."},
    {id: 1, skill: "CSS", learnedAt: "General Assembly", furtherInfo: "CSS gives webpages style."},
    {id: 2, skill: "JavaScript", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 3, skill: "jQuery", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 4, skill: "Firebase", learnedAt: "Self-Taught", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 5, skill: "Bootstrap", learnedAt: "Self-Taught", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 6, skill: "Node", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 7, skill: "Express", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 8, skill: "Git", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 9, skill: "Code Review", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
];

function getAll() {
    return skills; 
};

function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
};

function create(skill) {
    const id = Date.now() % 1000000; 
    skill.id = id;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(skill, id) {
    const skillObj = skills.find(skill => skill.id === parseInt(id));
    console.log(skill, "<--- updated skill");
    console.log(skillObj, "<--- original skill");
    Object.assign(skillObj, skill);
}

// export the functions as methods of the export object
module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne,
    update
};