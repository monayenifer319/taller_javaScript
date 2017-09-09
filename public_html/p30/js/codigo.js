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
  do {
    var op = Number(prompt("selecct an option\n 1. Employee management\n 2. Record hours worked\n 3. Manage payroll\n 4. Print payment vouchers\n0. exit the program "));
    switch (op) {
      case 1:
        Employemanag();
        break;
      case 2:
        hoursworked();
        break;
      case 3:
        ManagePayroll();
        //reghours = hoursworked();

        break;
      case 4:
        PrintpPayment();
        break;
      case 0:
        op = 0;
        alert("see you soon");
        break;
      default:
        alert("The option is not valid, enter a number from 0 to 4");
        break;
    }
  } while (op !== 0)
}
function Employemanag() {
  do {
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
        delet();
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
  } while (op !== 0)
}
function add() {
  var hsWorVal;
  var array = JSON.parse(localStorage.getItem('arrayEm'));
  var config = JSON.parse(localStorage.getItem('config'));
  do {
    var name = prompt("Enter the employee of name");
    var lastname = prompt("enter the lastname");
    var position = prompt("Enter the position");
    var salary = Number(prompt("enter salary"));
    while (salary < config.salary) {
      alert("Error, Must be greater than the salary already set");
      var salary = Number(prompt("enter salary"));
    }
    var id = prompt("Enter the identification number");
    if (array === null) {
      regemploye = {
        name,
        lastname,
        id,
        position,
        salary,
        hsWorVal
      };
      array = new Array();
      array.push(regemploye);
      localStorage.setItem("arrayEm", JSON.stringify(array));
      var tem = confirm("Do you want to add another person?");
    } else {
      for (var i = 0; i < array.length; i++) {
        while (id === array[i].id) {
          alert("Error, id already exists in the database");
          var id = prompt("Enter the identification number");
        }
      }
      regemploye = {
        name,
        lastname,
        id,
        position,
        salary,
        hsWorVal
      };
      //array = new Array();
      array.push(regemploye);
      localStorage.setItem("arrayEm", JSON.stringify(array));
      var tem = confirm("Do you want to add another person?");
    }
    if (tem) {
      var flag = 0;
    } else {
      flag = 1;
    }

  } while (flag === 0);
  Employemanag();
}

function visualize() {
  array = JSON.parse(localStorage.getItem('arrayEm'));
//  console.log(array);
  console.log("                   numero de empleados");
  console.log(" |---------------------------------------------------------------------|");
  console.log(" |index|  name   |  lastname   |    id     |   position  |   salary    |");
  console.log(" |---------------------------------------------------------------------|");
  for (var i = 0; i < array.length; i++) {
    console.log(" |  " + i + " |  " + array[i].name + " | " + array[i].lastname + " | " + array[i].id + " | " + array[i].position + " |  " + array[i].salary + "     |");
    console.log(" |-------------------------------------------------------------------|");
  }
}
function modify() {
  array = JSON.parse(localStorage.getItem("arrayEm"));
  config = JSON.parse(localStorage.getItem("config"));
  var tell = 0;
  do {
    var modify = prompt("Enter the id a search");
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === modify) {
        tell++;
        var employee = i;
      }
    }
    if (tell !== 0) {
      var option = Number(prompt("Do you want to modify?\n 1. name\n 2. lastname\n3. id\n4. position\n 5. salary "));
      switch (option) {
        case 1:
          array[employee].name = prompt("Enter the employee of name");
          break;
        case 2:
          array[employee].lastname = prompt("enter the lastname");
          break;
        case 3:
          array[employee].id = prompt("Enter the identification number");
          break;
        case 4:
          array[employee].position = prompt("Enter the position");
          break;
        case 5:
          array[employee].salary = Number(prompt("enter salary"));
          while (array[employee].salary < config.salary) {
            alert("Error, Must be greater than the salary already set");
            array[employee].salary = Number(prompt("enter salary"));
          }
          break;
        default:
          alert("The option is not valid, enter a number from 1 to 5");
          break;
      }
    } else {
      alert("error, The employee does not exist in the database");
    }
    localStorage.setItem("arrayEm", JSON.stringify(array));
    var tem = confirm("Want to remove another employee?");
    if (tem) {
      var flag = 1;
    } else {
      flag = 0;
    }
  } while (flag === 1);
}

function delet() {
  tell = 0;
  var array = JSON.parse(localStorage.getItem("arrayEm"));
  do {
    var answer = prompt("Enter the identification number of the employee");
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === answer) {
        tell++;
        index = i;
        var object = array[i];
      }
    }
    if (tell !== 0) {
      var tem = confirm("Are you sure to elect this employee?");
      if (tem) {
        array[index] = array[0];
        array[0] = object;
        array.shift();
        alert("the employee was successfully eliminated");
        localStorage.setItem("arrayEm", JSON.stringify(array));
        var answer = confirm("Want to remove another employee?");
      }
    } else {
      alert("error, The employee does not exist in the database");
    }
    if (answer) {
      var flag = 1;
    } else {
      flag = 0;
    }
  } while (flag === 1);
}

function hoursworked() {
  var tell = 0;
  var array = JSON.parse(localStorage.getItem("arrayEm"));
  var config = JSON.parse(localStorage.getItem("config"));
  var arrayHou = JSON.parse(localStorage.getItem("arrayHours"));
  var hNighValue;
  var hTimeValue;
  var hSunNigValue;
  var hDayTimValue;
  var hNightOveVal;
  var hExDayVal;
  var hExNigVal;
  var hTimeVal;
  var hsWorVal;
  do {
    do {
      var search = prompt("Enter the identification number of the employee");
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === search) {
          //alert("The employee was found to be successful");
          tell++;
          var inde = i;
        }
        if (tell === 0) {
          alert("error, The employee does not exist in the database");
        }
      }

    } while (tell === 0);

    if (tell !== 0) {
      do {
        var hourValue = array[inde].salary / config.hourjob;//valor hora normal
        var hourTime = Number(prompt("Enter the daytime hours worked"));//Horas diurnas (0%)
        var hourNight = Number(prompt("Enter the night hours worked")); //Horas nocturnas (35%)
        var hTimeSu = Number(prompt("Enter Daytime Sunday hours"));//Horas dominicales diurnas
        var hSunNight = Number(prompt("Enter Sunday night hours")); //dominicales nocturnas
        var hoursWor = hourTime + hourNight + hTimeSu + hSunNight;//maximo de horas laborables
        if (hoursWor > config.hourjob) {
          alert("Error, the hours worked must be less than " + config.hourjob);
          //hoursworked();
        }
      } while (hoursWor > config.hourjob);

      var hDayTime = Number(prompt("Enter Daytime overtime")); //extras diurnas (25%)
      var hNightOve = Number(prompt("Enter night overtime")); //extras nocturnas (75%)
      var hExtDay = Number(prompt("Enter Extraordinary daylight hours"));//dominicales extra diurnas
      var hExtNight = Number(prompt("Enter Extra night hours"));//dominicales extra nocturnas
      regHours = {
        search,
        hourValue,
        hourTime,
        hourNight,
        hTimeSu,
        hSunNight,
        hDayTime,
        hNightOve,
        hExtDay,
        hExtNight,
        hNighValue,
        hTimeValue,
        hSunNigValue,
        hDayTimValue,
        hNightOveVal,
        hExDayVal,
        hExNigVal,
        hTimeVal,
        hsWorVal
      };
      if (arrayHou === null) {
        arrayHou = new Array();
        arrayHou.push(regHours);
        localStorage.setItem("arrayHours", JSON.stringify(arrayHou));
        var tem = confirm("Want to manage another employee's hours?");
      } else {
        arrayHou.push(regHours);
        localStorage.setItem("arrayHours", JSON.stringify(arrayHou));
        var tem = confirm("Want to manage another employee's hours?");
      }
    }
    if (tem) {
      var flag = 1;
    } else {
      flag = 0;
    }
  } while (flag !== 0);
}

function ManagePayroll() {
  var array = JSON.parse(localStorage.getItem("arrayEm"));
  var config = JSON.parse(localStorage.getItem("config"));
  var arrayHou = JSON.parse(localStorage.getItem("arrayHours"));
  console.log("             Roster ");
  console.log(" |--------------------------------------------------|");
  console.log(" |   id    |" + " position|" + " Additional hours |" + "total a pagar|");
  console.log(" |--------------------------------------------------|");
  for (var H = 0; H < arrayHou.length; H++) {
    for (var i = 0; i < array.length; i++) {
      if (arrayHou[H].search === array[i].id) {

        // hNighValue: el valor total de las horas nocturnas
        arrayHou[H].hNighValue = (arrayHou[H].hourValue * 1.35) * arrayHou[H].hourNight;
//hTimeValue: el valor del total de las horas dominicales diurnas
        arrayHou[H].hTimeValue = (arrayHou[H].hourValue * 1.75) * arrayHou[H].hTimeSu;
//hSunNigValue: el valor del total de las horas dominicales nocturnas
        arrayHou[H].hSunNigValue = (arrayHou[H].hourValue * 1.110) * arrayHou[H].hSunNight;
//hDayTimValue: el valor total de las horas extras diurnas (25%)
        arrayHou[H].hDayTimValue = (arrayHou[H].hourValue * 1.25) * arrayHou[H].hDayTime;
//hNightOveVal: el valor total de las horas extras nocturnas (75%)
        arrayHou[H].hNightOveVal = (arrayHou[H].hourValue * 1.75) * arrayHou[H].hNightOve;
//hExDayVal: el valor total de las horas dominicales extra diurnas (100%)
        arrayHou[H].hExDayVal = (arrayHou[H].hourValue * 1.100) * arrayHou[H].hExtDay;
//hExNigVal: el valor total de las horas dominicales extra nocturnas (150%)
        arrayHou[H].hExNigVal = (arrayHou[H].hourValue * 1.150) * arrayHou[H].hExtNight;
        //total de las horas normales
        arrayHou[H].hTimeVal = arrayHou[H].hourValue * arrayHou[H].hourTime;
// valor total de todas las horas laboradas (saldo a pagar de horas)
        arrayHou[H].hsWorVal = arrayHou[H].hNighValue + arrayHou[H].hTimeValue + arrayHou[H].hSunNigValue + arrayHou[H].hDayTimValue + arrayHou[H].hNightOveVal + arrayHou[H].hExDayVal + arrayHou[H].hExNigVal + arrayHou[H].hTimeVal;
        var pay = arrayHou[H].hsWorVal + array[i].salary;  //total pago
        if (array[i].salary <= config.salary * config.salaTransp) {
          pay = pay + config.tranaid;
        } else if (array[i].salary >= config.salary * config.raten) {
          var ratention = (config.porRatent / 100) * array[i].salary;
          pay = (arrayHou[H].hsWorVal + array[i].salary) - ratention;
        } else if (array[i].salary === config.salary) {
          var foodaid = array[i].salary * 0.20;
          pay = array[i].salary + foodaid;
        }
        localStorage.setItem("arrayEm", JSON.stringify(array));
        console.log(" | " + array[i].id + "| " + array[i].position + " | " + arrayHou[H].hsWorVal + "                |" + pay + " |");
        console.log(" |-----------------------------------------------|");
      }
    }
  }

}

function PrintpPayment() {
  var array = JSON.parse(localStorage.getItem("arrayEm"));
  var config = JSON.parse(localStorage.getItem("config"));
  var arrayHou = JSON.parse(localStorage.getItem("arrayHours"));
  var id = prompt("Enter the identification number of the employee");
  var tell = 0;
  for (var i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      tell = 1;
      var index = i;
    }
  }
  if (tell !== 0) {
    if (array[index].salary <= config.salary * config.salaTransp) {
//var aid = config.salaTransp;
      var pay = array[i].salary + config.salaTransp;
      console.log("|----------------------------------------------------|");
      console.log("|               proof of payment                     |");
      console.log("|----------------------------------------------------|");
      console.log("| " + array[i].name + "  " + array[i].lastname + "  " + array[i].id + "           |");
      console.log("           increments                                   |");
      console.log("|posotion  " + array[i].position + "                           |");
      console.log("|base salary  Additional hours   transport                     |");
      console.log("|" + array[i].salary + " " + config.salaTransp + "                     |");
      console.log("|          decrements                                       |");
      console.log("| ratemtion " + ratention + "                               |");
      console.log("|   total payment    " + pay + "                            |");
      //console.log("| ")
      console.log("|                                  " + config.name + "    |");
      console.log("|--------------------------------------------------|");
    } else if (array[index].salary >= config.salary * config.raten) {
      var ratention = (config.porRatent / 100) * array[index].salary;
      var pay = array[index].salary - ratention;
      console.log("|------------------------------------------------|");
      console.log("|               proof of payment                 |");
      console.log("|------------------------------------------------|");
      console.log("| " + array[index].name + "   " + array[index].lastname + "   " + array[index].id + "                     |");
      console.log("| posotion  " + array[index].position + "                                 |");
      console.log("| base salary  Additional hours                  |");
      console.log("| " + array[index].salary + "                                        |");
      console.log("| ratemtion " + ratention + "                               |");
      console.log("| total payment    " + pay + "                       |");
      //console.log("| ")
      console.log("|                                     " + config.name + "  |");
      console.log("|------------------------------------------------|");
      //var id = prompt("Enter the identification number of the employee");
    }
  }
  if (tell === 0) {
    alert("error, The employee does not exist in the database");
    var id = prompt("Enter the identification number of the employee");
  }
}