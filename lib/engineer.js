const Employee = require("./Employee.js");
const main = require("./main.js")


class Engineer extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Engineer"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return main.engineer(this); 
    } 
 };

 module.exports = Engineer;