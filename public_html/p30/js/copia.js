//do {
//    var name = prompt("Enter the employee of name");
//    var lastname = prompt("enter the lastname");
//    var id = prompt("Enter the identification number");
//    for (var i = 0; array.length; i++) {
//      if (id === array[i].id) {
//        alert("the id ya existe, digite nuevamente");
//        var id = prompt("Enter the identification number");
} else {
//        var position = prompt("Enter the position");
//        var salary = Number(prompt("enter salary"));
//        if (salary < config.salary) {
//          alert("error");
//          var salary = Number(prompt("enter salary"));
//        } else {
//          regemploye = {
//            name,
//            lastname,
//            id,
//            position,
//            salary
//          };
//          if (array === null) {
//            array = new Array();
//            array.push(regemploye);
//            localStorage.setItem("arrayEm", JSON.stringify(array));
//          } else {
//            array.push(regemploye);
//            localStorage.setItem("arrayEm", JSON.stringify(array));
//          }
//          var tem = confirm("Do you want to add another person?");
//          if (tem) {
//            var flag = 0;
//          } else {
//            flag = 1;
//          }

}
}
}
//  } while (flag === 0);



//function menu() {
//  var op1 = Number(prompt("selecct an option\n 1. select idioma\n 2. Configure\n 3. Continue\n 0. exit the program "));
//  return op1;
//}

// casos del menu principal (1)
do {

}
}
while (op1 > 4)
        ;
//function Language() {
//  var lang = Number(prompt("Language setting\n 1. spanish\ 2. English"));
//  return lang;
//}

// funcion de configuracion
//function  configure() {
//
//  var op = Number(prompt("selecct an option\n 1. Name the of campany\n 2. salary minimum\n 3. To give birth of how many minimum wages retention \n 4. Percentage of source retention\n 5. Up to how much minimum wages are needed To pay transportation aid\n6. How much is the transport aid\n7. Amount of working hours per month\n8. return\n 0. exit the program "));
//  var regdataset = {
//    name: " ",
//    salary: " ",
//    saMlv: " ",
//    raten: " ",
//    porRatent: " ",
//    tranaid: " ",
//    hourjob: " "
//  };
//  // casos del menu configurar (2)
//  while (op !== 0) {
//    switch (op) {
//      case 1:
//        regdataset.name = prompt("Enter the of campany");
//        configure();
//        break;
//      case 2:
//        regdataset.salary = Number(prompt("Enter the salary minimun"));
//        configure();
//        break;
//      case 3:
//        regdataset.raten = Number(prompt("Enter, from how many wages retention is charged")); // a partir de cuentos ssalarios minimos se le retiene. entonces seri un numero entero a ingresar para gacer la operacion respectiva
//        configure();
//        break;
//      case 4:
//        regdataset.porRatent = Number(prompt("Enter, percentage of source retention"));// ingresa el porcentaje de l retencion. osea q si pasa el limite anterior se le cobra tal retencion cobraporcenretenn = salary * raten. ->(salary * porretent)
//        configure();
//        break;
//      case 5:
//        regdataset.saMlv = Number(prompt("Enter, up to how many minimum salaries are necessary to pay transport aid"));
//        configure();
//        break;
//      case 6:
//        regdataset.tranaid = Number(prompt("Enter, how much is the transport aid"));
//        configure();
//        break;
//      case 7:
//        regdataset.hourjob = Number(prompt("Enter, amount of working hours per \n\
//month"));//osea q los dias trbajados no pueden er mayor a los ingresados en la cong hourjob
//        configure();
//        break;
//      case 8:
//        menu();
//        //return regdataset;
//        break;
//      case 0:
//        op = 0;
//        alert("adios");
//        break;
//    }
//  }
//  if (op === 0) {
//    alert('Adios');
//    return;
//  }
//  return regdataset;
//}

        var regemploye = {
        name: "",
                lastname: "",
                id: "",
                position: "",
                salary: ""
                //employee = []
                };
//regemploye.employee = [];
        function Employemanag() {
        var flag = 1;
                var x = 0;
                var op = Number(prompt("select a option\n 1. add\n 2. visualize\n 3.modify\n 4. delete\n0. return"));
                while (op !== 0) {
        switch (op) {
        case 1:
                while (flag !== 0) {
//          regemploye.name = prompt("Enter the employee of name");
//          regemploye.lastname = prompt("enter the lastname");
//          regemploye.id = prompt("Enter the identification number");
//          var position = prompt("Enter the position");
//          var salary = Number(prompt("enter salary"));
//          var flag = Number(prompt("Want to add more employees?\nEnter 1 if your answer is yes, otherwise enter 0"));
        i = x;
                i++;
        }
        break;
                case 2:
//        console.log("           numero de empleados");
//        console.log(" |----------------------------------------------------------------------------|");
//        console.log(" |posicion |   nombre  |  apellido  |   documento    |   cargo    |  salario  |");
//        console.log(" |----------------------------------------------------------------------------|");
//        for (var i = 0; i <= x; i++) {
//          console.log(" |   " + i);
//          console.log("     |" + employee[i].name);
//          console.log("     |" + employee[i].lastname);
//          console.log("     |" + employee[i].id);
//          console.log("     |" + employee[i].position);
//          console.log("     |" + employee[i].salary);
//          console.log(" |-----------------------------------------------------------------------------|");
        }
        break;
                case 3:
                break;
                case 4:
                break;
                case 0:
                break;
        }
        }
return employee;
        }
//function continu() {
//  var op = Number(prompt("selecct an option\n 1. Employee management\n 2. Record hours worked\n 3. Manage payroll\n 4. Print payment vouchers\n0. exit the program "));
//  while (op !== 0) {
//    switch (op) {
//      case 1:
//        Employemanag();
//        break;
//      case 2:
//        break;
//      case 3:
//        break;
//      case 4:
//        break;
//      case 0:
//        break;
//    }
//  }
//
//
//}
