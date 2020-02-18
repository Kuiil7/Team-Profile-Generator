//extending employee parameters to manager
const Employee = require("./Employee.js");
const main = require("./main.js")


class Engineer extends Employee {
    constructor(name,id,email,github){
    super(name,id,email);
    this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGitHub() {
        return this.github;
    }
    getHTML() {
        return main.engineer(this); 
    } 
 };

 module.exports = Engineer;