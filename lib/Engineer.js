//Require added to allow us to pull 'super' constructor data for the child class.
const Employee = require('./Employee.js');

//Creates Engineer class and extends Employee 'super' data.
class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

//Allows us to export Engineer Class.
module.exports = Engineer;