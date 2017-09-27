$(() => {
  $("#money").val("$258.320.000");
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
});
