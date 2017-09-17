function operacions() {
  var n1 = Number($("#num1").val());
  var n2 = Number($("#num2").val());
  var elev = n1 ^ n2;
  var multip = n1 * n2;
  var dividir = n1 / n2;
  var mod = n1 % n2;
  var add = n1 + n2;
  sustra = n1 - n2;
  $("#ele").text("la suma de los numeros es:" + elev);
  $("#mul").text("la multiplicacion de los numeros es:" + multip);
  $("#div").text("la division de los numeros es:" + dividir);
  $("#div").text("la division de los numeros es:" + mod);
  $("#sum").text("la suma de los numeros es:" + add);
  $("#rest").text("la resta de los numeros es:" + sustra);
  //$("#mul").text("la multiplicacion de los numeros es:" + multip);

}
