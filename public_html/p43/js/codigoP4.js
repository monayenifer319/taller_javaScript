function yeni() {
  var n1 = Number($("#numm1").val());
  var n2 = Number($("#numm2").val());
  var elev = n1 ** n2;
  var Elev = n2 ** n1;
  var multip = n1 * n2;
  var dividir = n1 / n2;
  var mod = n1 % n2;
  var add = n1 + n2;
  var sustra = n1 - n2;
  $("#answer").html("power the: <br> " + n1 + " ^ " + n2 + " = " + elev + "<br>power the: <br> " + n2 + " ^ " + n1 + " = " + Elev + "<br> multiplication the: <br> " + n1 + " * " + n2 + " = " + multip);



//  $("#elev").text("la suma de los numeros es:" + elev);
//  $("#mul").text("la multiplicacion de los numeros es:" + multip);
//  $("#div").text("la division de los numeros es:" + dividir);
//  $("#div").text("la division de los numeros es:" + mod);
//  $("#sum").text("la suma de los numeros es:" + add);
//  $("#rest").text("la resta de los numeros es:" + sustra);
  //$("#mul").text("la multiplicacion de los numeros es:" + multip);

}