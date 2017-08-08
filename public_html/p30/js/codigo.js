function menu() {
  var op1 = Number(prompet("selecct an option\n 1. select idioma\n 2. Configure\n 3. Continue\n 0. exit the program "));
  return op1;
}
// funcion de configuracion
function configure() {
  var op = Number(prompet("selecct an option\n 1. Name the of campany\n 2. salary minimum\n 3. To give birth of how many minimum wages retention \n 4. Percentage of source retention\n 5. Up to how much minimum wages are needed To pay transportation aid\n6. How much is the transport aid\n7. Amount of working hours per month\n8. return\n 0. exit the program "));
  var regdataset = {
    name: " ",
    salary: " ",
    saMlv: " ",
    raten: " ",
    porretent: " ",
    tranaid: " ",
    hourjob: " ",
    array = [7]
  };
  // casos del menu principal (2)
  //var op1 = menu();
  while (op !== 0) {
    switch (op) {
      case 1:
        array[1].name = prompt("Enter the of campany");
        break;
      case 2:
        array[2].salary = Number(prompt("Enter the salary minimun"));
        break;
      case 3:
        regdataset.raten = Number(prompt("Enter, from how many wages retention is charged")); // a partir de cuentos ssalarios minimos se le retiene. entonces seri un numero entero a ingresar para gacer la operacion respectiva
        break;
      case 4:
        regdataset.porretent = Number(prompt("Enter, percentage of source retention"));// ingresa el porcentaje de l retencion. osea q si pasa el limite anterior se le cobra tal retencion cobraporcenretenn = salary * raten. ->(salary * porretent)
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
        return regdataset;
        break;
    }
  }
  return regdataset;
}
var regemploye = {
  name: "",
  lastname: "",
  id: "",
  position: "",
  salary: "",
  employee = []
};
function Employemanag() {
  var flag = 1;
  var x = 0;
  var op = Number(prompt("select a option\n 1. add\n 2. visualize\n 3.modify\n 4. Mdelete\n0. return"));
  while (op !== 0) {
    switch (op) {
      case 1:
        while (flag !== 0) {
          employee[i].name = prompt("Enter the employee's name");
          regemploye.lastname = prompt("enter the lastname");
          regemploye.id = prompt("Enter the identification number");
          var position = prompt("Enter the position");
          var salary = Number(prompt("enter salary"));
          var flag = Number(prompt("Want to add more employees?\nEnter 1 if your answer is yes, otherwise enter 0"));
          i = x;
          i++;
        }
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
function continu() {
  var op = Number(prompet("selecct an option\n 1. Employee management\n 2. Record hours worked\n 3. Manage payroll\n 4. Print payment vouchers\n0. exit the program "));
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
// casos del menu principal (1)
var op1 = menu();
while (op1 !== 0) {
  switch (op1) {
    case 1:

      break;
    case 2:
      var regdataset = configure(regdataset);
      break;
    case 3:
      continu();
      break;
    case 0:
      break;
  }
}