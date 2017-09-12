class spanish {

}
class english {
}
do {
  var lang = Number(prompt("Language setting\n 1. spanish\n 2. English. \n 0 exit"));
  switch (lang) {
    case 1:
      var span = new spanish;
      break;
    case 2:
      var engli = new english;
      break;
    default:
      alert("You must select a language");
      break;
  }
} while (lang !== 0);