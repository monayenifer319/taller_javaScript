var date1 = prompt("enter date 1");
var date2 = prompt("enter date 1")

var dateObj1 = new Date(date1);
var dateObj2 = new Date(date2);

var r=dateObj1-dateObj2;

var dias = Math.floor(r /(1000*60*60*24));
var mes =Math.floor(dias/30);
var ano =mes/12;
alert(dias);
alert(mes);
alert(ano);
//dateObj = new Date(year, month, date[, hours[, minutes[, seconds[,ms]]]]);