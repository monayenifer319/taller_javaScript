function Par() {
  var nump = Number($("#Npar").val());

  if (nump % 2 === 0) {
    $("#nump").text("the number is even");
  } else {
    $("#numNop").text("the number is odd");
  }
}


