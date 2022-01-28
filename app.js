'use strict';


let level = ["Junior", "Mid-senior", "Senior"];
let department = ["Administration", "Marketing", "Development", "Finance"];
let allEmployeesArr = [];
let formElement = document.getElementById("form");
let employeesDiv = document.getElementById("employeesDiv") // this is where i want the info to be inside



function Employee(fullName, department, level, image) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0 // i have to write the salary here because when i check the employee object i want it to be part of its properties
    this.image = image;
    this.id = uniqueID();
    allEmployeesArr.push(this);

}

Employee.prototype.calculateSalary = function () {

    let salaryWithoutTax; // Variables declared inside a { } block using let cannot be accessed from outside the block
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
    // console.log(allEmployeesArr[i].calculateSalary) ==> will show u what's inside of it
}

Employee.prototype.render = function () {
    // document.write(`<h4>The employee name is ${this.fullName} 
    // and their salary is ${this.salary}
    // and their id is ${this.id} </h4>`) //not needed anymore
    let employeePic = document.createElement("img");
    employeePic.setAttribute("src" , this.image);
    employeesDiv.appendChild(employeePic);
    
    let employeeName = document.createElement("h4");
    employeeName.textContent = `Name: ${this.fullName}`;
    employeesDiv.appendChild(employeeName);

    let employeeId = document.createElement("h4");
    employeeId.textContent = `ID: ${this.id}`;
    employeesDiv.appendChild(employeeId);

    let employeeDepartment = document.createElement("h4");
    employeeDepartment.textContent = `Department: ${this.department}`;
    employeesDiv.appendChild(employeeDepartment);

    let employeeLevel = document.createElement("h4");
    employeeLevel.textContent = `Level: ${this.level}`;
    employeesDiv.appendChild(employeeLevel);

    let employeeSalary = document.createElement("h4");
    employeeSalary.textContent = `Salary: ${this.salary}`;
    employeesDiv.appendChild(employeeSalary);

}

let ghaziSamer = new Employee("Ghazi Samer", department[0], level[2], './assets/Ghazi.jpg');
let lanaAli = new Employee("Lana Ali", department[3], level[2], './assets/Lana.jpg');
let tamaraAyoub = new Employee("Tamara Ayoub", department[1], level[2], './assets/Tamara.jpg');
let safiWalid = new Employee("Safi Walid", department[0], level[1], './assets/Safi.jpg');
let omarZaid = new Employee("Omar Zaid", department[2], level[2], './assets/Omar.jpg');
let ranaSaleh = new Employee("Rana Saleh", department[2], level[0], './assets/Rana.jpg');
let hadiAhmad = new Employee("Hadi Ahmad", department[3], level[1], './assets/Hadi.jpg');

function uniqueID() {
    const arr = [];
    while (arr.length < 8) {
        const r = Math.floor(1000 + Math.random() * 9000);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    // console.log(arr);
    return arr;
}

for (let i = 0; i < allEmployeesArr.length; i++) {
    allEmployeesArr[i].calculateSalary();
    allEmployeesArr[i].render();
    uniqueID(allEmployeesArr[i]);
}


formElement.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();// the default behavior is refresh and i want to display data
    //event.target.idofTheInput.value
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.imageUrl.value;

    // getting and knowing what the user entered. add event listener first and then get for each input what they entered
    // now that i got all the user input; i need to create a new object instance of my constructor 

    let newEmployee = new Employee(fullName, department, level , image);
    newEmployee.calculateSalary();
    newEmployee.render();

}