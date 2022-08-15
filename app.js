function Employee(id,name,dep,level) {
    this.id=id;
    this.name=name;
    this.dep=dep;
    this.level=level;
    this.salary=calc();

    function calc() {
        switch(level) {
            case "Junior":
                return Math.round((Math.random()*500+500));
                break;
            case "Mid-Senior":
                return Math.round((Math.random()*500+1000));
                break;
            case "Senior":
                return Math.round((Math.random()*500+1500));
                break;
            default :
                return -1;
        }
            
    }

    this.print = function() {
        return `I'm ${this.name} my salary is ${this.salary}`;
    }

}

let employees = [
    new Employee(1000,"Ghazi Samer" , "Administration","Senior"),
    new Employee(1001,"Lana Ali" , "Finance","Senior"),
    new Employee(1002,"Tamara Ayoub" , "Marketing","Senior"),
    new Employee(1003,"Safi Walid" , "Administration","Mid-Senior"),
    new Employee(1004,"Omar Zaid" , "Development","Senior"),
    new Employee(1005,"Rana Saleh" , "Development","Junior"),
    new Employee(1006,"Hadi Ahmad" , "Finance","Mid-Senior"), 
];

for (let index = 0; index < employees.length; index++) {
    console.log(employees[index].print());
}

// Second Task
let main= document.getElementsByTagName("main");

let table = document.createElement("table");

table.style.cssText="border:5px solid black ; border-collapse: collapse";
let headers = ["Employee ID" , "Full Name" , "Department" , "Level" , "Salary"];
let ths=[];

for(let i=0;i<headers.length;i++) {
    ths[i]=document.createElement("th");
    ths[i].textContent=headers[i];
}

let thead = document.createElement("thead");

for(let i=0;i<ths.length;i++){
    thead.append(ths[i]);
    ths[i].style.cssText="padding : 5px ; width:150px ; border:1px solid black;font-size:22px"
}

let tbody= document.createElement("tbody");

function addEmployee(emp) {
    let tr=document.createElement("tr");
    let empKeys = [emp.id,emp.name,emp.dep,emp.level,emp.salary];
    let tds=[];

    for(let i=0;i<empKeys.length;i++) {
        tds[i]=document.createElement("td");
        tds[i].style.cssText="font-size:20px; border:1px solid black;padding:5px";
        tds[i].textContent=empKeys[i];
        tr.append(tds[i]);
    }
    return tr;
}

for (let index = 0; index < employees.length; index++) {
    tbody.append(addEmployee(employees[index]));
}

table.append(thead);
table.append(tbody);
main[0].append(table);