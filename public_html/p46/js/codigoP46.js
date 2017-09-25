function Par() {
  var nump = Number($("#Npar").val());

  if (nump % 2 === 0) {
    $("#decirpar").text("el numero es par");
  } else {
    $("#decirpar").text("el numero es impar");
  }
}


