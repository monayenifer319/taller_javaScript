$(() => {
  $("#result").click(() => {
    var siA = Number($("#a").val());
    var siB = Number($("#b").val());
    var siC = Number($("#c").val());
    var bas = Number($("#ba").val());
    var heigh = Number($("#h").val());
    var Perim = siA + siB + siC;
    var Area = (bas * heigh) / 2;
    $("#are").val(Area);
    $("#per").val(Perim);
  });
});