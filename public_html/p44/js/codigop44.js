function operatiBasic() {
  var n1 = Number($("#numm1").val());
  var n2 = Number($("#numm2").val());
  var multip = n1 * n2;
  var dividir = n1 / n2;
  var mod = n1 % n2;
  var add = n1 + n2;
  var sustra = n1 - n2;
  $("#mul").text("la multiplication the numbers is: " + multip);
  $("#div").text("la division de los numeros es:" + dividir);
  $("#sum").text("la suma de los numeros es:" + add);
  $("#rest").text("la resta de los numeros es:" + sustra);
  //$("#mul").text("la multiplicacion de los numeros es:" + multip);
//  $("#answer").html("power the: <br> " + n1 + " ^ " + n2 + " = " + elev + "<br>power the: <br> " + n2 + " ^ " + n1 + " = " + Elev + "<br> multiplication the: <br> " + n1 + " * " + n2 + " = " + multip);
}


