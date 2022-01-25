'use strict';

function Employee (id, fullName, department, level, salary){
this.id = id;
this.fullName = fullName;
this.department = department;
this.level = level;
this.salary = salary;
let imageURL = `./${id}.png`;

}

Employee.prototype.calculateSalary = function (){
    if (this.level.toLowerCase() == "senior") {
        return Math.floor(Math.random() * (2000 - 1500) + 1500)
    } else if (this.level.toLowerCase() == "mid-senior") {
        return Math.floor(Math.random() * (1500 - 1000) + 1000)
    } else if (this.level.toLowerCase() == "junior") {
        return Math.floor(Math.random() * (1000 - 500) + 500)
    }
 this.netSalary = Math.floor(this.salary() * 0.925)
}

Employee.prototype.render = function() {
   document.write(`<h2>Employee: ${fullName}</h2>
   <h2>Net Salary: ${netSalary}</h2>`)
}

let employee1 = new Employee (1000, "Ghazi Samer", 'Administration', 'Senior');
let employee2 = new Employee (1001, "Lana Ali", 'Finance', 'Senior');
let employee3 = new Employee (1002, "Tamara Ayoub", 'Marketing', 'Senior');
let employee4 = new Employee (1004, "Omar Zaid", 'Development', 'Senior');
let employee5 =new Employee (1003, "Safi Walid", 'Administration', 'Mid-Senior');
let employee6 =new Employee (1005, "Rana Saleh", 'Development', 'Junior');
let employee7 =new Employee (1006, "Hadi Ahmad", 'Finance	', 'Mid-Senior');


console.log(employee1);