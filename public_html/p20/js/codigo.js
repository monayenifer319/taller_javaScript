var smlv = Number(prompt("Enter the minimum wage (smlv)"));
var salary = Number(prompt("Enter the salary your salary"));
var dayjob = Number(prompt("Enter the days worked,It should be less than 30 days"));
var salaryMin = smlv * 2;
var salaryMax = smlv * 4;
var valday = salary / 30;
if((salary <= salaryMin) && (dayjob <= 30)){
    console.log("According to the salary received is entitled to transport aid");
    var transp = Number(prompt("Please enter the value of the transport aid"));
    var paymeday =  valday * dayjob;
    var dayTrans = (transp / 30)*dayjob;
    var totalpay = paymeday + transp;
    console.log("Transport aid: "+ dayTrans);
    console.log("Source retention: "+ 0);
    console.log("worked days: "+ dayjob + " = "+ paymeday);
    console.log("Total payment: "+ totalpay);
}if((salary >= salaryMax) && (dayjob <= 30)){
    console.log("According to the salary entered, the transpott aid is not entitled and will be retained source");
    var reten = Number(prompt("Please enter The value of the source retreat"));
    var paymeday =  valday * dayjob;
    var totalpay2 = paymeday - reten;
    console.log("Transport aid: "+ 0);
    console.log("Source retention: "+ reten);
    console.log("worked days: "+ dayjob + " = "+ paymeday );
    console.log("Total payment: "+ totalpay2);
}if((salary > salaryMin) && (dayjob <= 30) && (salary < salaryMax)){
    console.log("According to the salary entered, does not have the right to transport and will not be held at source");
    var paymeday =  valday * dayjob;
    console.log("Transport aid: "+ 0);
    console.log("Source retention: "+ 0);
    console.log("worked days: "+ dayjob + " = "+ paymeday );
    console.log("Total payment: "+ paymeday);
}else{
    console.log("Error, you do not comply with the conditions of the system please check the information entered");
}
