const Employee = require("./Employee.js");
const main = require("./main.js")
class Intern extends Employee {
    constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
    }
    getRole() {
        return "Intern"
    }
    
    getSchool() {
        return this.school;
    }
    getHTML() {
        return main.intern(this);
    } 
 }

 module.exports = Intern;