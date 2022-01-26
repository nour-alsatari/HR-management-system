'use strict';

let level = ["Junior", "Mid-senior", "Senior"];
let department = ["Administration", "Marketing", "Development", "Finance"];
let allEmployeesArr = [];

function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0 // i have to write the salary here because when i check the employee object i want it to be part of its properties
    this.image = `./assets/${id}.png`;
    allEmployeesArr.push(this);

}

Employee.prototype.calculateSalary = function () {
    let salaryWithoutTax; // Variables declared inside a { } block cannot be accessed from outside the block
    if (this.level.toLowerCase() == "senior") {
        salaryWithoutTax = Math.floor(Math.random() * (1500 - 2000 + 1) + 1500)
    } else if (this.level.toLowerCase() == "mid-senior") {
        salaryWithoutTax = Math.floor(Math.random() * (1000 - 1500 + 1) + 1000)
    } else if (this.level.toLowerCase() == "junior") {
        salaryWithoutTax = Math.floor(Math.random() * (500 - 1000 + 1) + 500)
    }
    // console.log(salaryWithoutTax);
    return this.salary = salaryWithoutTax - (salaryWithoutTax * 0.075);
    //console.log(allEmployeesArr[i].calculateSalary()) ==> number because it returns a number
    // console.log(allEmployeesArr[i].calculateSalary()) ==> will show u what's inside of it
}

Employee.prototype.render = function () {
    document.write(`<h4>The employee name is ${this.fullName} 
    and their salary is ${this.salary} </h4>`)

    // console.log(allEmployeesArr[i].render()) ==> undefined because it doesn't return anything
}

let ghaziSamer = new Employee("1000", "Ghazi Samer", department[0], level[2]);
let lanaAli = new Employee("1001", "Lana Ali", department[3], level[2]);
let tamaraAyoub = new Employee("1002", "Tamara Ayoub", department[1], level[2]);
let safiWalid = new Employee("1003", "Safi Walid", department[0], level[1]);
let omarZaid = new Employee("1004", "Omar Zaid", department[2], level[2]);
let ranaSaleh = new Employee("1005", "Rana Saleh", department[2], level[0]);
let hadiAhmad = new Employee("1006", "Hadi Ahmad", department[3], level[1]);


for (let i = 0; i < allEmployeesArr.length; i++) {
    allEmployeesArr[i].calculateSalary();
    allEmployeesArr[i].render();
}

//
// function uniqueID() {
//     const arr = [];
//     while (arr.length < 8) {
//         const val = Math.floor(1000 + Math.random() * 9000);
//         if (arr.indexOf(r) === -1) {
//             arr.push(r);
//         }
//     }
// }

// let form = document.getElementById("form");
// form.addEventListener("submit", handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault();
//     let fullName = event.target.fullName.value;
//     let image = event.target.empImg.value;
//     let department = event.target.department.value;
//     let level = event.target.level.value;

//     let newEmployee = new Employee(0, fullName, department, level, imageUrl);

//     uniqueID(newEmployee);
//     newEmployee.render();

// }Employee.prototype.render = function () {
//     let div = document.createElement("div");
//     let employeeImage = document.createElement("img");
//     let employeeName = document.createElement("h4");
//     let employeeId = document.createElement("h4");
//     let employeeDepartment = document.createElement("h3");
//     let employeeLevel = document.createElement("h3");
//     let employeeSalary = document.createElement("h2");
//     employeeImage.setAttribute("src", this.image);
//     employeeName.textContent = `Employee: ${this.fullName}`;
//     employeeId.textContent = `ID: ${this.id}`;
//     employeeDepartment.textContent = `Department: ${this.department}`;
//     employeeLevel.textContent = `Level: ${this.level}`;
//     employeeSalary.textContent = `Salary: ${this.salary}`;
//     div.appendChild(employeeImage);
//     div.appendChild(employeeName);
//     div.appendChild(employeeId);
//     div.appendChild(employeeDepartment);
//     div.appendChild(employeeLevel);
//     div.appendChild(employeeSalary);

//     return div;
//   };
