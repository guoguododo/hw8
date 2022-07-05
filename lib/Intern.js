const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    // Add role Intern
    getRole() {
        return "Intern";
    }
    // Intern role need school
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;