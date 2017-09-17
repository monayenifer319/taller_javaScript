function data() {
  var NAME = $("#name").val();
  var TYPE = $("#type").val();
  var ID = $("#id").val();
  var HEIGHT = $("#height").val();
  var GENDER = $("#height").val();

  $("#Name").text("hello mane is " + NAME);
  $("#Id").text("my number of " + TYPE + " IS " + ID);
  $("#Height").text("my height is " + HEIGHT);
  $("#Gender").text("my gender is " + GENDER);
}