function menu() {
  var op = Number(prompet("selecct an option\n 1. add produc\n 2. buscar produc name\n 2. buscar product code"));
  return op;
}

function add() {
  var name = prompt("Enter the name of product");
  var code = prompet("Enter the code of product");
  var precio = prompt("Enter the precio");
  var cate = prompt("Enter the categoria");

}

op = menu();
while (op !== 0) {
  switch (op) {
    case 1:
      add();
      break;
    case 2:
      sharcname();
      break;
    case 3:
      break;
  }
}
