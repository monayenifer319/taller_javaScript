function menu() {
  var op = Number(prompt("Menu:\n 1. Fill arrangement\n 2. Search element by sequential search method\n 3. Apply bubble sorting method\n 4.Apply bidirectional bubble sorting method\n 5. Apply insertion sort method\n 6. Apply mixing method\n 7. Apply sort order by selection\n 8. Print arrangement\n 0. Exit the program"));
  return op;
}
//llenar el arreglo
function Fill() {
  var array = [];
  for (var i = 0; i < max; i++) {
    array[i] = Math.round((Math.random()) * 100);
  }

  console.log("el array es:" + array + "\n");
  return array;
}

function sequential(array) {
  var num = Number(prompt("ingrese el numero a buscar"));
  for (var i = 0; i < max; i++) {
    if (array[i] === num) {
      console.log("the number " + num + " fue encontrado en la possition " + i);
      break;
    } else if (i === (max - 1)) {
      console.log("the number " + num + " does not fit ");
      break;
    }
  }
}
function bubble(array) {
  var tem;
  for (var p = 0; p < max; p++) {
    for (var i = 0; i < max; i++) {
      if (array[i] > array[i + 1]) {
        tem = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tem;
      }
    }
  }
  console.log(array);
}

function bidirectional(array) {
  for (var p = 0; p < max; p++) {
    for (var i = 0; i < max; i++) {
      if (array[i] > array[i + 1]) {
        var tem = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tem;
      }
    }
    for (i = i; i > max; i--) {
      if (array[i] < array[i - 1]) {
        var tem = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tem;
      }
    }
  }
  console.log(array);
}

function insertion(array) {
  for (var i = 0; i < max; i++) {
    var tem = array[i];
    var tell = i - 1;
    while ((array[tell] > tem) && (tell >= 0)) {
      array[tell + 1] = array[tell];
      tell = tell - 1;
    }
    array[tell + 1] = tem;
  }
  console.log(array);
}

function selection(array) {
  for (var i = 0; i < max; i++) {
    var min = i;
    for (var tell = i + 1; tell < max; tell++) {
      if (array[min] > array[tell]) {
        min = tell;
      }
      tem = array[i];
      array[i] = array[min];
      array[min] = tem;
    }
  }
  console.log(array);
}
function Print(orderSeque, orderBub, orderBidi, orderInser, orderSele) {
  console.log(array);
}
while (op !== 0) {
  var op = menu();
  switch (op) {
    case 1:
      var max = Number(prompt("Enter the maximun of arrangement"));
      array = Fill();
      break;
    case 2:
      orderSeque = sequential(array);
      break;
    case 3:
      orderBub = bubble(array);
      break;
    case 4:
      orderBidi = bidirectional(array);
      break;
    case 5:
      orderInser = insertion(array);
      break;
    case 6:
      mixing(array);
      break;
    case 7:
      orderSele = selection(array);
      break;
    case 8:
      Print(orderSeque, orderBub, orderBidi, orderInser, orderSele);
      break;
    case 0 :
      op = 0;
      break;
  }
}