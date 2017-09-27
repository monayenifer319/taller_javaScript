$(() => {
  $("#query").click(() => {
    var num = Number($("#N").val());
    var tell = 0;
    for (var i = 0; i <= num; i++) {
      if (num % i === 0) {
        tell++;
      }
    }
    if ((tell === 1) || (tell === 2)) {
      $("#answe").text("the number " + num + " is prime");
    } else {
      $("#answe").text("the number " + num + " do not prime");
    }
  });
});
