const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const main = require("./lib/main.js");
const fs = require("fs");
const open = require("open");

//adding the header and footer values to a variable to be included in final HTML print
const team = [main.header(), main.footer()];

//initialize function to prompt manager's questions using Inquirer
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
//building a team after the selection of manager - Engineer then intern
function buildTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"What type of team member would you like to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
    //if the Engineer is selected out of answer role, then prompt the following questions
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `What is your engineer's GitHub??`
        }
//setting up a variable to store the eneineer's new information and then build the team value
      ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
        team.splice(team.length-1,0,engineer.getHTML());
        buildTeam();
      })
    }

//if the answer role is intern, then prompt the following questions
    if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is your intern's school?`
        }
//store the answers in the intern variable to build team 
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.school);
        team.splice(team.length-1,0,intern.getHTML());
        buildTeam();
      })
    }

    //after the build team has been selected, then print the team variable to html
  return printHTML(team);
  
  });
}
//write to file the team value into HTML
function printHTML(team){
  fs.writeFile("team.html",team, (err) => {
    if(err) {
      throw err;
    };
  });
  open("team.html");
  };


//START OF APP after all the above steps has been completed  
initalize()

//Start the prompt with the manager first then build team
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  team.splice(team.length-1,0,manager.getHTML());
  buildTeam();
});






