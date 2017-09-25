function Prime() {
  var num = Number($("#N").val());
  var tell = 0;
  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      tell++;
    }
  }
  if ((tell === 1) || (tell === 2)) {
    $("#nump").text("El numero " + num + " es primo");
  } else {
    $("#numNop").text("El numero " + num + " no es primo");
  }
}


