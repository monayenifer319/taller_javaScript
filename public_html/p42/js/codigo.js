function operationn() {
  var n1 = 10;
  var n2 = 50;
  var elev = Math.pow(n2, n1);
  var Elev = Math.pow(n1, n2);
  var multip = n2 * n1;
  var div = n2 / n1;
  var dividir = n1 / n2;
  var mod = n2 % n1;
  var add = n2 + n1;
  var sustra = n2 - n1;
  $("#buttons").html(n2 + " ^ " + n1 + " = " + elev + " <br>" + n1 + " ^ " + n2 + " = " + Elev + "<br>the multiplication " + n1 + " * " + n2 + " = " + multip + "<br> the division " + n2 + " / " + n1 + " = " + div + "<br> the division " + n1 + " / " + n2 + " = " + dividir + "<br> the mod " + n2 + " mod " + n1 + " = " + mod + "<br> the sum " + n2 + " + " + n1 + " = " + add + "<br> the diferencia " + n2 + " - " + n1 + " = " + sustra);
  // $("#buttons").text();

//  ("la suma de los numeros es:" + elev);
//  $("#ele").text("la suma de los numeros es:" + elev);
//  $("#mul").text("la multiplicacion de los numeros es:" + multip);
//  $("#div").text("la division de los numeros es:" + dividir);
//  $("#div").text("la division de los numeros es:" + mod);
//  $("#sum").text("la suma de los numeros es:" + add);
//  $("#rest").text("la resta de los numeros es:" + sustra);
//  //$("#mul").text("la multiplicacion de los numeros es:" + multip);
}