function data() {
  var NAME = $("#name").val();
  var TYPE = $("#type").val();
  var ID = $("#id").val();
  var HEIGHT = $("#height").val();
  var GENDER = $("#gender").val();
  var live = document.getElementById('label').checked;

  $("#containe").text("hello mane is " + NAME + " my number of " + TYPE + " IS " + ID + " my height is " + HEIGHT + " my gender is " + GENDER + "es verdad que usted vive en catago? " + live);
}