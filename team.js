const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

    function generateTeam(){
        inquirer.prompt([
            {
                type:'list',
                name: 'addEmployee',
                message: 'What type of employee needs to be added?',
                choices: ['Manager','Engineer', 'Intern', 'Build your Dream Team' ]
            }
        ]).then(answers => {
            switch(answers.addEmployee){
                case 'Manager':
                addManager();
                break;
            }

            function addManager(){
                console.log('manager on duty');
                
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
                    }
                ]).then(answers => {
                console.log(answers);
                });
            };
        });    
    }
    generateTeam();
       
    

        
    
    
    
 






















