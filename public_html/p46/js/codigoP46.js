function Par() {
  var nump = Number($("#Npar").val());

  if (nump % 2 === 0) {
    $("#answer").text("the number is even");
  } else {
    $("#answer").text("the number is odd");
  }
}


