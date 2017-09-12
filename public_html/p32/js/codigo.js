class operation {
  constructor() {
    this._array;
    this._add;
    this._diferencia;
    this._multipli;
    this._division;
  }
  set add(array) {
    this._add = array[0] + array[1];
  }
  get add() {
    return this._add;
  }
  set diferencia(array) {
    this._diferencia = array[0] - array[1];
  }
  get diferencia() {
    return this._diferencia;
  }
  set  multipli(array) {
    this._multipli = array[0] * array[1];
  }
  get multipli() {
    return  this._multipli;
  }
  set division(array) {
    this._division = array[0] * array[1];
  }
  get division() {
    return  this._division;
  }
}
function num() {
  var num1 = Number(prompt("enter a number"));
  var num2 = Number(prompt("Enter another number"));
  var num = [num1, num2];
  return num;
}
var clas = new operation();
//var num = [];
do {
  var option = Number(prompt("menu:\n 1. To make a sum\n 2.make a subtraction,\n 3.Make a multiplication\n 4. Make a division\n 0.exit the program"));
  switch (option) {
    case 1:
      clas.array = num();
      clas.add = clas.array;
      console.log("the sum is: " + clas.add);
      break;
    case 2:
      clas.array = num();
      clas.diferencia = clas.array;
      console.log("the diferencia is: " + clas.diferencia);
      break;
    case 3:
      clas.array = num();
      clas.multipli = clas.array;
      console.log("the multiplication is: " + clas.multipli);
      break;
    case 4:
      clas.array = num();
      clas.division = clas.array;
      console.log("the division is: " + clas.division);
      break;
    case 0:
      option = 0;
      break;
    default:
      alert("he option is not valid, enter a number from 0 to 4");
      break;
  }
} while (option !== 0);
