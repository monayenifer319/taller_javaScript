function Language() {
  var lang = Number(prompt("Language setting\n 1. spanish\n 2. English"));
  switch (lang) {
    case 1:

      break;
    case 2:
      menuE();
      break;
  }
}
Language();

function menuE() {
  var op1 = Number(prompt("selecct an option\n 1. Configure\n 2. Continue\n 0. exit the program "));
  switch (op1) {
    case 1:
      configure();
      break;
    case 2:
      continu();
      break;
    case 0:
      op1 = 0;
      break;
    default:
      alert("lo sentimos no es una opcion validad");
      break;
  }
}

function  configure() {
  var regdataset = {
    name: " ",
    salary: " ",
    saMlv: " ",
    raten: " ",
    porRatent: " ",
    tranaid: " ",
    hourjob: " "
  };
  while (op !== 0) {
    var op = Number(prompt("selecct an option\n 1. Name the of campany\n 2. salary minimum\n 3. To give birth of how many minimum wages retention \n 4. Percentage of source retention\n 5. Up to how much minimum wages are needed To pay transportation aid\n6. How much is the transport aid\n7. Amount of working hours per month\n8. return\n 0. exit the program "));

    // casos del menu configurar (2)
    switch (op) {
      case 1:
        regdataset.name = prompt("Enter the of campany");
        break;
      case 2:
        regdataset.salary = Number(prompt("Enter the salary minimun"));
        break;
      case 3:
        regdataset.raten = Number(prompt("Enter, from how many wages retention is charged")); // a partir de cuentos ssalarios minimos se le retiene. entonces seri un numero entero a ingresar para gacer la operacion respectiva
        break;
      case 4:
        regdataset.porRatent = Number(prompt("Enter, percentage of source retention"));// ingresa el porcentaje de l retencion. osea q si pasa el limite anterior se le cobra tal retencion cobraporcenretenn = salary * raten. ->(salary * porretent)
        break;
      case 5:
        regdataset.saMlv = Number(prompt("Enter, up to how many minimum salaries are necessary to pay transport aid"));
        break;
      case 6:
        regdataset.tranaid = Number(prompt("Enter, how much is the transport aid"));
        break;
      case 7:
        regdataset.hourjob = Number(prompt("Enter, amount of working hours per \n\
month"));//osea q los dias trbajados no pueden er mayor a los ingresados en la cong hourjob
        break;
      case 8:
        menuE();
        op = 0;
        //return regdataset;
        break;
      case 0:
        op = 0;
        alert("adios");
        break;
    }
  }
  localStorage.setItem("config", JSON.stringify(regdataset));
  //return regdataset;
}

function continu() {
  var op = Number(prompt("selecct an option\n 1. Employee management\n 2. Record hours worked\n 3. Manage payroll\n 4. Print payment vouchers\n0. exit the program "));
  while (op !== 0) {
    switch (op) {
      case 1:
        Employemanag();
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 0:
        break;
    }
  }
}
function Employemanag() {
  var employe = [];
  var flag = 1;
  var tell = 0;
  do {
    var op = Number(prompt("select a option\n 1. add\n 2. visualize\n 3.modify\n 4. delete\n0. return"));

    for (var i = 0; flag === 0; i++) {

    }
  } while (op !== 0);

}
