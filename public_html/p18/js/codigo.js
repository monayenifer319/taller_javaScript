var salary = Number(prompt("enter the salary"));
var retention = Number(prompt("Enter the percentage of the retention Thus:"));
var valReten = salary * (retention/100);
var payment = salary - valReten;
console.log("The value of the retention is: "+ valReten);
console.log("The total payment is: "+ payment);
