const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let mangerPrompt;
let engineerPrompt;
let internPrompt;

function generateTeam() {
    
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'What type of employee do you want to add?',
      choices: ['Manager', 'Engineer', 'Intern', 'Build your team?!?!']
    }
  ]).then(answers => {
    switch (answers.employeeType) {
      case 'Manager':
        // Add manager prompts
        inquirer.prompt([
            {
                type:'input',
                name: 'mngrName',
                message: "Enter the manager's name."
            },
            {
                type:'input',
                name: 'mngrId',
                message: "Enter the managers's ID."
            },
            {
                type:'input',
                name: 'mngrEmail',
                message: "Enter the manager's Email."
            },
            {
                type:'input',
                name: 'mngrOfficeNum',
                message: "Enter the manager's office number."
            },  
            {
            type: 'confirm',
            name: 'addAnother',
            message: 'Return to Main menu to add new Employee or Generate your team.'
             }
        ]).then(answers => {

            mangerPrompt = new Manager(answers.mngrName, answers.mngrId, answers.mngrEmail, answers.mngrOfficeNum);

          if (answers.addAnother) {
            generateTeam();
          } else{
            console.log('uhmmmmmmmmm what now?');
          };

        });
        break;
      case 'Engineer':
        // Add engineer prompts
        inquirer.prompt([
            {
                type:'input',
                name: 'engName',
                message: "Enter the Engineer's name."
            },
            {
                type:'input',
                name: 'engId',
                message: "Enter the Engineer's ID."
            },
            {
                type:'input',
                name: 'engEmail',
                message: "Enter the Engineer's Email."
            },
            {
                type:'input',
                name: 'engGit',
                message: "Enter the Engineer's github username."
            },
            {
            type: 'confirm',
            name: 'addAnother',
            message: 'Return to Main menu to add new Employee or Generate your team.'
          }
        ]).then(answers => {
            
         engineerPrompt = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGit);


          if (answers.addAnother) {
            generateTeam();
          } else{
            console.log('engine start');
          }
        });
        break;
      case 'Intern':
        // Add intern prompts
        inquirer.prompt([
            {
                type:'input',
                name: 'intName',
                message: "Enter the Intern's name."
            },
            {
                type:'input',
                name: 'intId',
                message: "Enter the Intern's ID."
            },
            {
                type:'input',
                name: 'intEmail',
                message: "Enter the Intern's Email."
        
            },
            {
                type:'input',
                name: 'intSchool',
                message: "Enter the Intern's School name."
            },
            {
            type: 'confirm',
            name: 'addAnother',
            message: 'Return to Main menu to add new Employee or Generate your team.'
          }
        ]).then(answers => {

          internPrompt = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool)

          if (answers.addAnother) {
            generateTeam();
          }else{
            console.log(answers);
        }});
        break;
      case 'Build your team?!?!':
        // Exit the program
        console.log('Team building in progress...', mangerPrompt, engineerPrompt, internPrompt);
        break;
    }
  });
}

generateTeam();
