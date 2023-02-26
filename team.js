const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



    function generateTeam(){
        //Prompt that allows ypu to select the type of employee that is being added.
        inquirer.prompt([
            {
                type:'list',
                name: 'addEmployee',
                message: 'What type of employee needs to be added?',
                choices: ['Manager','Engineer', 'Intern', 'Build your Dream Team' ]
            }
            //answers are then put into a switch case to retrieve relivent data to the added employee
        ]).then(answers => {
            switch(answers.addEmployee){
                case 'Manager':
                addManager();
                break;
            }

            //addManager function created so when can call the function in the switch case above, it allows the second prompt to populate when 'Manager' is selected.
            function addManager(){
                //If manager is on duty then the function is being called correctly BOOM!!
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
       
    

        
    
    
    
 






















