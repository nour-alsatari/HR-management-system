
let stringData = localStorage.getItem("employees");
let objectData = JSON.parse(stringData);




let parent = document.getElementById("parent");
let table = document.createElement("table");
parent.appendChild(table);
let departmentsArr = ["Administration", "Marketing", "Development", "Finance"];



function renderHeader() {

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let th = document.createElement("th");
    th.textContent = "Department"
    tr.appendChild(th);

    let th2 = document.createElement("th");
    th2.textContent = "Number of employees"
    tr.appendChild(th2);

    let th3 = document.createElement("th");
    th3.textContent = "Total salary"
    tr.appendChild(th3);

    let th4 = document.createElement("th");
    th4.textContent = "Average salary of the department"
    tr.appendChild(th4);
}

function renderBody(){

    for (let i = 0; i < 4; i++) {

        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td = document.createElement("td");
        td.textContent = departmentsArr[i];
        tr.appendChild(td);

        let td2 = document.createElement("td");
        td2.textContent = numOfEmployees[i];
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = sumOfSalaries[i];
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = average[i];
        tr.appendChild(td4);
    }

}

function renderFooter (){
let tr = document.createElement ("tr");
table.appendChild(tr);

let td = document.createElement ("td");
td.textContent = "Total";
tr.appendChild (td);

let td2 = document.createElement ("td");
td2.textContent = totalAllEmployees();
tr.appendChild (td2);

let td3 = document.createElement ("td");
td3.textContent = totalAllSalaries();
tr.appendChild (td3);

let td4 = document.createElement ("td");
td4.textContent = totalAllAverages();
tr.appendChild (td4);

}


function renderAllTable() {

    renderHeader();
    renderBody();
    renderFooter();

}



function numberOfEmployees() {

    let a = 0;
    let m = 0;
    let d = 0;
    let f = 0;

    for (i = 0; i < objectData.length; i++) {
        if (objectData[i].department == "Administration") {
            a = a + 1;
        } else if (objectData[i].department == "Marketing") {
            m = m + 1;
        } else if (objectData[i].department == "Development") {
            d = d + 1;
        } else if (objectData[i].department == "Finance") {
            f = f + 1;
        }

    }
    return [a, m, d, f];
}

function totalSalary() {
    let salaries = [];
    let totalA = 0;
    let totalM = 0;
    let totalD = 0;
    let totalF = 0;

    for (i = 0; i < objectData.length; i++) {
        if (objectData[i].department == "Administration") {
            totalA += objectData[i].salary;
        } else if (objectData[i].department == "Marketing") {
            totalM += objectData[i].salary;
        } else if (objectData[i].department == "Development") {
            totalD += objectData[i].salary;
        } else if (objectData[i].department == "Finance") {
            totalF += objectData[i].salary;
        }

    }
    salaries.push(totalA);
    salaries.push(totalM);
    salaries.push(totalD);
    salaries.push(totalF);

    return salaries;
}

function averageSalary() {

    let averageSalaries = [];

    for (let i = 0; i < numOfEmployees.length; i++) {
        averageSalaries.push(sumOfSalaries[i] / numOfEmployees[i]);
    }

    return averageSalaries;
}


function totalAllEmployees (){
    let sum = 0;

    for (let i = 0 ; i<numOfEmployees.length ; i++){
        
        sum +=numOfEmployees[i];

    }
    console.log (sum);
    return sum;
}

function totalAllSalaries (){
    let sum = 0;

    for (let i = 0 ; i<sumOfSalaries.length ; i++){
        
        sum +=sumOfSalaries[i];

    }
    console.log (sum);
    return sum;
}

function totalAllAverages (){
    let sum = 0;

    for (let i = 0 ; i<average.length ; i++){
        
        sum +=average[i];

    }
    console.log (sum);
    return sum;
}


let numOfEmployees = numberOfEmployees();
let sumOfSalaries = totalSalary();
let average = averageSalary();


renderAllTable();