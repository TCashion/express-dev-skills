// set up data as an array of objects
const skills = [
    {id: 0, name: "HTML", learnedAt: "General Assembly"},
    {id: 1, name: "CSS", learnedAt: "General Assembly"},
    {id: 2, name: "JavaScript", learnedAt: "General Assembly"},
    {id: 3, name: "jQuery", learnedAt: "General Assembly"},
    {id: 4, name: "Firebase", learnedAt: "Self-Taught"},
    {id: 5, name: "Bootstrap", learnedAt: "Self-Taught"},
    {id: 6, name: "Node", learnedAt: "General Assembly"},
    {id: 7, name: "Express", learnedAt: "General Assembly"},
    {id: 8, name: "Git", learnedAt: "General Assembly"},
    {id: 9, name: "Code Review", learnedAt: "General Assembly"},
]

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