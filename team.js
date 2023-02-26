const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



    inquirer.prompt([
        {
            type:'checkbox',
            name: 'EmployeeType',
            message: 'What type of employee needs to be added?',
            choices: ['Manager','Engineer', 'Intern', 'Build your Dream Team' ]
        }
    ]).then(answers => {
        console.log('works');
    });

























