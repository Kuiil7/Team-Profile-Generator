const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js");
const fs = require("fs");

const team = [htmlBlocks.header(), htmlBlocks.footer()];

function initalize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your manager's name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your manager's ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your manager's email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is your manager's office number?`
    }
  ])
}









function printHTML(team){
    fs.writeFile("team.html",team, (err) => {
      if(err) {
        throw err;
      };
      console.log("Your team has been constructed!");
    });
    open("team.html");
    };

    /* ==========================================================*/
//START OF APP SEQUENCE 
/* ==========================================================*/
initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  team.splice(team.length-1,0,manager.getHTML());
  buildTeam();
});