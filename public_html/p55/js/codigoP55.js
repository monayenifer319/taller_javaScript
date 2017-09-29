$(() => {
  $("#query").click(() => {
    var num = Number($("#N").val());
    if (num < 0) {
      positive = num * (-1);
      $("#answe").html("The positive number is:  " + positive);
    } else {
      $("#answe").html("Please enter a number less than zero");
    }
  });
});