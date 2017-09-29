$(() => {
  $("#result").click(() => {
    var num1 = Number($("#A").val());
    var num2 = Number($("#B").val());
    var num3 = Number($("#C").val());
    var answer = (num1 * num2) / num3;
    $("#opera").val(num1 + " * " + num2 + " / " + num3);
    $("#Answer").val(answer);
  });
});