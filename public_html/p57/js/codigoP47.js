$(() => {
  var voidi = "";
  var aste = "*";
  var i = 0;
  do {
    voidi = voidi + aste;
    $("#ate").append(voidi + '<br>');
    i++;
  } while (i < 7);
});