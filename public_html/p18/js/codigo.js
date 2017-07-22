var salary = Number(prompt("enter the salary"));
var retention = Number(prompt("Enter the percentage of the retention Thus: 0.05, if it is 5%, thus 0.50 if it is 50%"));
var valReten = salary * retention;
var payment = salary - valReten;
console.log("The value of the retention is: "+ valReten);
console.log("The total payment is: "+ payment);
