$(() => {
  $("#money").val("$258.320.000");
  $("#vaHour").val("$45.000");
  $("#vaGasoli").val("$20.000");
  $("#butConsult").click(() => {
    var Num = Number($("#number").val());
    var mone = 258320000;
    var divid = mone / Num;
    $("#move").animate({
      'margin-left': '5vw'
    }, 2000);
    $("#hide").animate({
      'margin-left': '110vw'
    }, 2000);
    $("#dividir").val(mone + " / " + Num + " = " + divid);
    $("#bond").val(divid);
  });
  $("#butConsult2").click(() => {
    var num = Number($("#numb").val());
    var total = num * 45000;
    var gasol = total - 20000;
    $("#Move").animate({
      "margin-left": "5vw"
    }, 2000);
    $("#hide").animate({
      'margin-left': '110vw'
    }, 2000);
    $("#multi").val(num + " * " + "45000");
    $("#minus").val(total + " - " + " 20000 ");
    $("#profit").val(gasol);
  });
  $("#butConsult3").click(() => {
    var mile = 5.280;
    var inch = 12;
    var cent = 2.54;
    var answer = mile * inch * cent;
    $("#MOve").animate({
      "margin-left": "5vw"
    }, 2000);
    $("#hide").animate({
      "margin-left": "90vw"
    }, 2000);
    $("#multiP3").val(mile + " * " + inch + " * " + cent);
    $("#answ").val(answer);
  });
});
