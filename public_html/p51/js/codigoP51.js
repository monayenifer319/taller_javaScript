$(() => {
  $("#consul").click(() => {
    var Ege = Number($("#ege").val());
    if (Ege >= 18) {
      $("#if").html("!!welcolme!!");
    } else {
      $("#if").html("sorry we can not enter the reventon");
    }
  });
});