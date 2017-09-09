var option = Number(prompt("menu:\n 1. To make a sum\n 2.make a subtraction,\n 3.Make a subtraction\n 4. Make a division\n 0.exit the program"));
function add() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  sum = num1 + num2;
  console.log("the sum is: " + sum);
}
function diferencia() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  difere = num1 - num2;
  console.log("the diferencia is: " + difere);
}
function multipli() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  multi = num1 * num2;
  console.log("the multiplication is: " + multi);
}
function division() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  divi = num1 / num2;
  console.log("the division is: " + divi);
}
//while(option !== 0){
switch (option) {
  case 1:
    add();
    break;
  case 2:
    diferencia();
    break;
  case 3:
    multipli();
    break;
  case 4:
    division();
    break;
}
// console.log("The option is not valid");
//}
