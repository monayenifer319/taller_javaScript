$(() => {
  $("#boton").click(() => {
    var n1 = Number($("#numm1").val());
    var n2 = Number($("#numm2").val());
    var elev = n1 ** n2;
    var Elev = n2 ** n1;
    var multip = n1 * n2;
    var dividir = n1 / n2;
    var div = n2 / n1;
    var mod = n1 % n2;
    $("#subir").animate({
      'margin-left': '5vw'
    }, 2000);
    $("#answer").animate({
      'margin-left': '110vw'
    }, 2000);
    $("#ele").val(n1 + " ^ " + n2 + " = " + elev);
    $("#Ele").val(n2 + " ^ " + n1 + " = " + Elev);
    $("#Multi").val(n1 + " * " + n2 + " = " + multip);
    $("#Div").val(n1 + " / " + n2 + " = " + dividir);
    $("#divi").val(n2 + " / " + n1 + " = " + div);
    $("#Mod").val(n1 + " mod " + n2 + " = " + mod);

  });
});