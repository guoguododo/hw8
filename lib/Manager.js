const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // Add role Manager
    getRole() {
        return "Manager";
    }
    // Manager role need office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;