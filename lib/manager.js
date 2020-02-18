//Extending manager parameters to employee
const Employee = require("./Employee.js");
const main = require("./main.js")


class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return main.manager(this); 
    } 
 };

 module.exports = Manager;