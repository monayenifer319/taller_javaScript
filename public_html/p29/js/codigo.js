function menu() {
  var op = Number(prompt("selecct an option\n 1. add product\n 2. Find product by name\n 3. Find product by code"));
  return op;
}

function add() {
  var array = JSON.parse(localStorage.getItem('array29'));
  do {
    var tell = 0;
    var name = prompt("Enter the name of product?");
    var code = prompt("Enter the code of product?");
    var price = prompt("Enter the price of product?");
    var products = {
      name,
      code,
      price
    };
    if (array === null) {
      array = [products];
      localStorage.setItem('array29', JSON.stringify(array));
    } else {
      array.push(products);
      localStorage.setItem('array29', JSON.stringify(array));

    }
    let tmp = confirm("want to add another product?");
    if (tmp) {
      var tell = 0;
    } else {
      tell = 1;
    }
  } while (tell === 0);
  return array;
}

function searchname(array) {
  array = JSON.parse(localStorage.getItem("array29"));
  var search = prompt("Enter the name of the product you want to search");
  for (var i = 0; i < array.length; i++) {
    if (search === array[i].name) {
      var info = " ";
      for (var p in array[i]) {
        info += array[i][p] + " ";
      }
      console.log("The product was found" + info);

    } else if (search !== array[i].name) {
      console.log("The product was not found");
    }
  }
}

function searchcode(array) {
  array = JSON.parse(localStorage.getItem("array29"));
  var searchc = prompt("Enter the code of the product you want to search");
  for (var i = 0; i < array.length; i++) {
    if (searchc === array[i].code) {
      var info = " ";
      for (var p in array[i]) {
        info += array[i][p] + " ";
      }
      console.log("The product was found" + info);
    } else if (i !== array[i].code) {
      console.log("The product was not found");
    }
  }
}

while (op !== 0) {
  var op = menu();
  switch (op) {
    case 1:
      var array = add();
      break;
    case 2:
      searchname(array);
      break;
    case 3:
      searchcode(array);
      break;
    case 0:
      op = 0;
      break;

  }
}
