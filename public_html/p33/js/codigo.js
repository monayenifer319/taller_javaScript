class cvcla {
  constructor() {
    this._person;
    this._family;
    this._refeJob;
    this._profile;
    this._print;
    this._regPerso;
    this._regfamily;
    this._regjob;
    this._regprofile;
  }
  setperson() {
    this._regPerso = {
      name: " ",
      lastname: " ",
      id: " ",
      phone: " ",
      email: " "
    };
    this._regPerso.name = prompt("Enter your name");
    this._regPerso.lastname = prompt("Enter your lastname");
    this._regPerso.id = prompt("Enter your id number");
    this._regPerso.phone = prompt("Enter number of phone");
    this._regPerso.email = prompt("Enter your mail");
  }
  getperson() {
    return this._regPerso;
  }
  setfamily() {
    this._regfamily = {
      name: " ",
      lastname: " ",
      id: " ",
      phone: " "
    };
    this._regfamily.name = prompt("Enter nomber");
    this._regfamily.lastname = prompt("Enter lastname");
    this._regfamily.id = prompt("Enter id number");
    this._regfamily.phone = prompt("Enter number of phone");
  }
  getfamily() {
    return this._regfamily;

  }
  setrefeJob() {
    this._regjob = {
      name: " ",
      lastname: " ",
      id: " ",
      phone: " ",
      campany: " "
    };
    this._regjob.name = prompt("Enter name");
    this._regjob.lastname = prompt("Enter lastname");
    this._regjob.id = prompt("Enter id number");
    this._regjob.phone = prompt("Enter number of phone");
    this._regjob.email = prompt("Where do you work");
  }
  getrefeJob() {
    return this._regjob;
  }
  setprofile() {
    this._regprofile = {
      ocupation: " ",
      titles: " ",
      experience: " "
    };
    this._regprofile.ocupation = prompt("prophecyor ocupation");
    this._regprofile.titles = prompt("obtained titles");
    this._regprofile.experience = prompt("years of work experience");
  }
  getprofile() {
    return this._regprofile;
  }
  setprint(_regPerso, _regfamily, _regjob, _regprofile) {
    console.log("                  CV                   *");
    console.log(" ");
    console.log("*********personal information***********");
    console.log("name:     " + _regPerso.name + "       *");
    console.log("lastname:  " + _regPerso.lastname + "   *");
    console.log("id number:  " + _regPerso.id + "        *");
    console.log("number phone: " + _regPerso.phone + "    * ");
    console.log("email: " + _regPerso.email + "           *");
    console.log("***********Family Reference***************");
    console.log("*                                        *");
    console.log("*name:      " + _regfamily.name + "      *");
    console.log("*lastname:  " + _regfamily.lastname + "  *");
    console.log("*id number:  " + _regfamily.id + "       *");
    console.log("*number phone: " + _regfamily.phone + "  *");
    console.log("*********** Reference job*****************");
    console.log("*                                        * ");
    console.log("*name:       " + _regjob.name + "        *");
    console.log("*lastname:   " + _regjob.lastname + "    *");
    console.log("*id number:   " + _regjob.id + "         *");
    console.log("*number phone:" + _regjob.phone + "      *");
    console.log("*campany phone: " + _regjob.campany + "  *");
    console.log("*********** professional profile *********");
    console.log("*                                        *");
    console.log("*prophecyor ocupation: " + _regprofile.ocupation);
    console.log("*obtained titles: " + _regprofile.titles);
    console.log("years of work experience: " + _regprofile.experience);
  }
  getprint() {
    this._regprint;
  }
}


var cv = new cvcla();

do {
  var op = Number(prompt("Menu:\n 1. Personal information\n 2. Family Reference\n 3. Reference job\n 4. professional profile\n 5. Print resume\n 0. Exit the program"));
  switch (op) {
    case 1:
      cv.setperson();
      break;
    case 2:
      cv.setfamily();
      break
    case 3:
      cv.setrefeJob();
      break;
    case 4:
      cv.setprofile();
      break;
    case 5:
      cv.setprint(cv._regPerso, cv._regfamily, cv._regjob, cv._regprofile);
      break;
    case 0:
      op = 0;
      break;
    default:
      alert("The option is not valid, enter a number from 1 to 5");
      break;
  }
} while ((op !== 0));
