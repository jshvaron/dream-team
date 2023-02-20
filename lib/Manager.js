//Require added to allow us to pull 'super' constructor data for the child class.
const Employee = require('./Employee.js');

//Creates Manager class and extends Employee 'super' data.
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

//Allows us to export Manager Class.
module.exports = Manager;