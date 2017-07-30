var date1 = prompt("enter date 1: AA/MM/DD");
var date2 = prompt("enter date 2: AA/MM/DD");

var dateObj1 = new Date(date1);
var dateObj2 = new Date(date2);

var r=dateObj1-dateObj2;

var day = Math.floor(r /(1000*60*60*24));
var month = Math.floor(day/30);
var year = Math.floor(month/12);
console.log("The difference between the two dates entered is:");
console.log("days: "+ day);
console.log("month: "+ month);
console.log("year: "+ year);