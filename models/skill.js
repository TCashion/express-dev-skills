// set up data as an array of objects
const skills = [
    {id: 0, name: "HTML", learnedAt: "General Assembly", furtherInfo: "HTML is like the 'scaffolding' for web pages."},
    {id: 1, name: "CSS", learnedAt: "General Assembly", furtherInfo: "CSS gives webpages style."},
    {id: 2, name: "JavaScript", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 3, name: "jQuery", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 4, name: "Firebase", learnedAt: "Self-Taught", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 5, name: "Bootstrap", learnedAt: "Self-Taught", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 6, name: "Node", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 7, name: "Express", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 8, name: "Git", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
    {id: 9, name: "Code Review", learnedAt: "General Assembly", furtherInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet non rerum ab sapiente vero tempora porro natus expedita corporis aspernatur tenetur, culpa quaerat quasi nihil sequi rem inventore. Autem."},
];

// export the functions as methods of the export object
module.exports = {
    getAll, 
    getOne
};

function getAll() {
    return skills; 
};

function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
};

