$(() => {
  $("#buttonR").click(() => {
    var SALARY = Number($("#salary").val());
    var RATE = Number($("#rate").val());
    var valReten = SALARY * (RATE / 100);
    var payment = SALARY - valReten;
    $("#answer").html("The value of the retention is: " + valReten + " <br> " + "The total payment is: " + payment);
  });
});