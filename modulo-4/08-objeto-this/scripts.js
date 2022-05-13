var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var salaries = {
    admin: 1000,
    editor: 600,
    manager: 1200,
    developer: 900
};
var employee = {
    name: "Adrián",
    lastname: "Solimano",
    email: "adrian@asd.com",
    role: "developer",
    getSalary: function () {
        return "El salario de ".concat(this.name, " es ").concat(salaries[this.role], " porque es ").concat(this.role);
    }
};
var cuantoCobraAdrian = employee.getSalary();
employee.role = "editor";
employee.name = "J. Adrián";
cuantoCobraAdrian = employee.getSalary();
var otherEmployee = __assign({}, employee);
otherEmployee.name = "Sofi";
otherEmployee.role = "admin";
console.log(otherEmployee);
var cuantoCobraSofi = otherEmployee.getSalary();
console.log(cuantoCobraSofi);
var otherEmployeeHannah = __assign({}, employee);
otherEmployeeHannah.name = "Hannah";
otherEmployeeHannah.role = "editor";
console.log(otherEmployeeHannah);
var cuantoCobraHannah = otherEmployeeHannah.getSalary();
console.log(cuantoCobraHannah);
// console.log(employee);
// console.log(cuantoCobraAdrian);
