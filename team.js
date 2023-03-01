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
                case 'Engineer':
                addEngineer();
                    break;
                case 'Intern':
                addIntern();
                    break;
            }
            

            //addManager function allows the Manag
            function addManager(){

                inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));                

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
                    },
                    {
                        type: 'loop',
                        name: 'addOns',
                        message: 'Add additional employees?',
                        questions: [
                            {
                                type: 'list',
                                name: 'addOnEmp',
                                message:'Would you like to add another employee?',
                                choices: [ 'Engineer' , 'Intern', 'done']
                                
                            },
 
                        ]
                    }
                    
                ]).then(answers => {
                    switch(answers.addOns[0].addOnEmp){
                        case 'Engineer':
                        addEngineer();
                            break;
                        case 'Intern':
                        addIntern();  
                            break;
                        case 'done':
                        console.log('Done adding employees');  
                    }
                });
            };

            function addEngineer(){
                inquirer.prompt([
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
                    
                ])
                

            }
            
            function addIntern(){
                console.log('intern!!!');
            }
        });   
    }
    generateTeam();
       
    

        
    
    
    
 






















