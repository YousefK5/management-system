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
