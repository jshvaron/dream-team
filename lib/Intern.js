//Require added to allow us to pull 'super' constructor data for the child class.
const Employee = require('./Employee.js');

//Creates Intern class and extends Employee 'super' data.
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}
//Allows us to export Intern Class.
module.exports = Intern;