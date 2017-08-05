function menu() {
  var op = Number(prompt("Menu:\n 1. Fill arrangement\n 2. Search element by sequential search method\n 3. Apply bubble sorting method\n 4.Apply bidirectional bubble sorting method\n 5. Apply insertion sort method\n 6. Apply mixing method\n 7. Aplicar el método de ordenamiento por selección\n 8. Print arrangement\n 0. Exit the program"));
  return op;
}
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
      console.log("the number " + num + " do no ");
      break;
    }
  }
}

//array();
//var op = menu();
//var op = 1;
while (op !== 0) {
  var op = menu();
  switch (op) {
    case 1:
      var max = Number(prompt("Enter the maximun of arrangement"));
      array = Fill();
      break;
    case 2:
      sequential(array);
      break;
    case 3:
      bubble();
      break;
    case 4:
      bidiretional();
      break;
    case 5:
      insertion();
      break;
    case 6:
      mixing();
      break;
    case 7:
      selección();
      break;
    case 8:
      Print();
      break;
    case 0 :
      op = 0;
      break;
  }
}
