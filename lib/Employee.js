// creates Employee class to use as super for Engineer, Intern, and Manager.
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

// Allows us to export the constructor data above to add in 'super' for our child classes and our Inquirer prompt.
module.exports = Employee