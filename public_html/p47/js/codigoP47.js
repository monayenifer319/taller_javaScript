$(() => {
  var voidi = " ";
  var aste = "*";
  var i = 0;
  do {
    voidi = voidi + aste;
    $("#ate").val(voidi + "olaaa");
    i++;
  } while (i < 7);
  $("#ate").val("olaaa");
});