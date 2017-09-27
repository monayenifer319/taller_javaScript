$(() => {
  $("#buttons")
  var n1 = 10;
  var n2 = 50;
  var elev = Math.pow(n2, n1);
  var Elev = Math.pow(n1, n2);
  var multip = n2 * n1;
  var div = n2 / n1;
  var dividir = n1 / n2;
  var mod = n2 % n1;
  var add = n2 + n1;
  var subtra = n2 - n1;
  $("#ele").val(n1 + " ^ " + n2 + " = " + elev);
  $("#Ele").val(n2 + " ^ " + n1 + " = " + Elev);
  $("#Multi").val(n1 + " * " + n2 + " = " + multip);
  $("#Div").val(n1 + " / " + n2 + " = " + dividir);
  $("#divi").val(n2 + " / " + n1 + " = " + div);
  $("#Mod").val(n1 + " mod " + n2 + " = " + mod);
  $("#Sum").val(n2 + " + " + n1 + " = " + add);
  $("#Subtra").val(n1 + " - " + n2 + " = " + subtra);
});
