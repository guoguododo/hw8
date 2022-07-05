const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

// add aditional role Enginneer
    getRole() {
        return "Engineer";
    }
// additional role need github
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;