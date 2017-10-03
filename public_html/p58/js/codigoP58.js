$(() => {
  var years = 15;
  var months = 12;
  var days = 30;
  var hours = 24;
  var minutes = 60;
  var seconds = 60;
  var months15 = months * years;
  var days15 = months15 * days;
  var hours15 = days15 * hours;
  var minutes15 = hours15 * minutes;
  var seconds15 = minutes15 * seconds;

//console.log(days15+" days");
//console.log(hours15+" hours");
//console.log(minutes15+" minutes");
//console.log(seconds15+" seconds");
  $("#month").val(months15);
  $("#day").val(days15);
  $("#hour").val(hours15);
  $("#min").val(minutes15);
  $("#second").val(seconds15);
});