const salaries = {
    admin: 1000,
    editor: 600,
    manager: 1200,
    developer: 900
}


const employee = {
    name: "Adrián",
    lastname: "Solimano",
    email: "adrian@asd.com",
    role: "developer",
    getSalary: function() {
        return `El salario de ${this.name} es ${salaries[this.role]} porque es ${this.role}`
    }
}

let cuantoCobraAdrian = employee.getSalary();

employee.role = "editor";
employee.name = "J. Adrián"

cuantoCobraAdrian = employee.getSalary();

const otherEmployee = { ...employee }

otherEmployee.name = "Sofi";
otherEmployee.role = "admin";

console.log(otherEmployee);


let cuantoCobraSofi = otherEmployee.getSalary();
console.log(cuantoCobraSofi);


const otherEmployeeHannah = { ...employee }

otherEmployeeHannah.name = "Hannah";
otherEmployeeHannah.role = "editor";

console.log(otherEmployeeHannah);


let cuantoCobraHannah = otherEmployeeHannah.getSalary();
console.log(cuantoCobraHannah);



// console.log(employee);
// console.log(cuantoCobraAdrian);
