function Language() {
  var lang = Number(prompt("Language setting\n 1. spanish\n 2. English"));
  switch (lang) {
    case 1:

      break;
    case 2:
      menuE();
      break;
    default:
      alert("You must select a language");
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
      alert("see you soon");
      break;
    default:
      alert("The option is not valid, enter a number from 0 to 2");
      break;
  }
}
function  configure() {
  var regdataset = {
    name: " ",
    salary: " ",
    salaTransp: " ",
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
        regdataset.salaTransp = Number(prompt("Enter, up to how many minimum salaries are necessary to pay transport aid"));
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
        alert("see you soon");
        break;
      default:
        alert("The option is not valid, enter a number from 0 to 8");
        break;
    }
  }
  localStorage.setItem("config", JSON.stringify(regdataset));
  //return regdataset;
}

function continu() {
  var op = Number(prompt("selecct an option\n 1. Employee management\n 2. Record hours worked\n 3. Manage payroll\n 4. Print payment vouchers\n0. exit the program "));
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
      op = 0;
      alert("see you soon");
      break;
    default:
      alert("The option is not valid, enter a number from 0 to 4");
      break;
  }
}
function Employemanag() {
  var op = Number(prompt("select a option\n 1. add\n 2. visualize\n 3.modify\n 4. delete\n5. return\n 0 exi the program"));
  switch (op) {
    case 1:
      add();
      break;
    case 2:
      // array = add();
      visualize();
      break;
    case 3:
      modify();
      break;
    case 4:
      break;
    case 5:
      continu();
      op = 0;
      break;
    case 0:
      op = 0;
      alert("see you soon");
      break;
    default:
      alert("The option is not valid, enter a number from 0 to 5");
      break;
  }
}
function add() {
  var array = JSON.parse(localStorage.getItem('arrayEm'));
  var config = JSON.parse(localStorage.getItem('config'));
  do {
    var name = prompt("Enter the employee of name");
    var lastname = prompt("enter the lastname");
    var id = prompt("Enter the identification number");
    for (var i = 0; array.length; i++) {
      if (id === array[i].id) {
        alert("the id ya existe, digite nuevamente");
      } else {
        var id = prompt("Enter the identification number");
        var position = prompt("Enter the position");
        var salary = Number(prompt("enter salary"));
        if (salary === config.salary) {
          alert("error");
        } else {
          var salary = Number(prompt("enter salary"));
        }
      }
    }

    regemploye = {
      name,
      lastname,
      id,
      position,
      salary
    };
    if (array === null) {
      array = new Array();
      array.push(regemploye);
      localStorage.setItem("arrayEm", JSON.stringify(array));
    } else {
      array.push(regemploye);
      localStorage.setItem("arrayEm", JSON.stringify(array));
    }
    var tem = confirm("Do you want to add another person?");
    if (tem) {
      var flag = 0;
    } else {
      flag = 1;
    }
  } while (flag === 0);
  //return array;
}

function visualize() {
  array = JSON.parse(localStorage.getItem('arrayEm'));
//  console.log(array);
  console.log("                   numero de empleados");
  console.log(" |-------------------------------------------------------------------------|");
  console.log(" |index|   name    |  lastname   |      id     |   position  |   salary    |");
  console.log(" |-------------------------------------------------------------------------|");
  for (var i = 0; i <= array.length; i++) {
    console.log(" |  " + i + " |  " + array[i].name + " |   " + array[i].lastname + "  |  " + array[i].id + "   |   " + array[i].position + "  |  " + array[i].salary);
    console.log(" |-----------------------------------------------------------------------|");
  }
}
function modify() {
  array = JSON.parse(localStorage.getItem("arrayEm"));
  var modify = prompt("Enter the id a search");
  for (var i = 0; i <= array.length; i++) {
    if (array[i].id === modify) {
      console.log(" |  " + i + " |  " + array[i].name + " |   " + array[i].lastname + "  |  " + array[i].id + "   |   " + array[i].position + "  |  " + array[i].salary);
      console.log(" |-----------------------------------------------------------------------|");
    }
  }

}
