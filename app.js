function Employee(id,name,dep,level,img) {
    this.id=id;
    this.name=name;
    this.dep=dep;
    this.level=level;
    this.imgUrl=img;
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

// let employees = [
//     new Employee(1000,"Ghazi Samer" , "Administration","Senior"),
//     new Employee(1001,"Lana Ali" , "Finance","Senior"),
//     new Employee(1002,"Tamara Ayoub" , "Marketing","Senior"),
//     new Employee(1003,"Safi Walid" , "Administration","Mid-Senior"),
//     new Employee(1004,"Omar Zaid" , "Development","Senior"),
//     new Employee(1005,"Rana Saleh" , "Development","Junior"),
//     new Employee(1006,"Hadi Ahmad" , "Finance","Mid-Senior"), 
// ];

// localStorage.clear();

let employees=[];

let cards=document.getElementById("cards");

console.log(localStorage.getItem("employees"));
if(localStorage.getItem("employees")!=null) {
    employees = JSON.parse(localStorage.getItem("employees"));
    for(let i=0;i<employees.length ; i++) {
        addEmployee(employees[i]);
    }
}

let inputId= document.querySelector(`[name=id]`);
let inputName= document.querySelector(`[name=name]`);
let selectDepart= document.querySelector(`#depart`);
let selectLevel= document.querySelector(`#level`);
let imgUrl=document.querySelector(`[name=img]`);
let subButton=document.getElementById("subButton");

inputId.value=1000+employees.length;

subButton.addEventListener("click" , e => {
    if(inputName.value=="") {
        alert("Please Enter Employee Name");
    } 
    else {
        let isID=false;
        employees.forEach(el => {
            if(el.id==inputId.value) {
                isID=true;
            }
        });
        if(isID) {
            alert("ID already exist !");
        }
        else {
            let employee= new Employee(inputId.value , inputName.value , selectDepart.value , selectLevel.value , imgUrl.value);
            employees.push(employee);
            addEmployee(employee);
            localStorage.setItem("employees" , JSON.stringify(employees));
            location.reload();
}}
});

cards.style.cssText = "display:flex ; justify-content:space-around ; flex-wrap:wrap ; align-items: center"

function addEmployee(emp) {
    let card=document.createElement("div");
    card.style.cssText="border-radius:10px; margin: 10px; padding : 10px 20px ; background-color:#293462 ; width: 250px ; height: 400px ; box-shadow: 8px 11px 10px 2px rgb(41 52 98)";
    
    let img = document.createElement("img");
    img.src=emp.imgUrl;
    img.style.cssText = "width :100% ; height: 65%;margin-bottom:10px ; border-radius:10%"
    
    let info= document.createElement("div");
    info.style.cssText= "font-size : 18px; color: white";
    info.innerHTML=`Name : ${emp.name} <br> ID: ${emp.id} <br> Department: ${emp.dep} <br> Level: ${emp.level} <br> Salary : ${emp.salary}$`;
    
    card.append(img);
    card.append(info);
    cards.append(card);
}

let remove= document.getElementById("clear");

remove.onclick =function (){
    localStorage.clear();
    location.reload();
}