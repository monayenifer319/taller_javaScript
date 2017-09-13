class methods {
  constructor() {
    this._array;
    this._sequential;
    this._bubble;
    this._bidirectional;
    this._insertion;
    this._Selection;
  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  set sequential(array) {
    var num = Number(prompt("ingrese el numero a buscar"));
    for (var i = 0; i < max; i++) {
      if (array[i] === num) {
        this._sequential = array[i];
        //break;
      } else if (i === (max - 1)) {
        console.log("the number " + num + " does not fit ");
        //break;
      }
    }
  }
  get sequential() {
    return this._sequential;
  }
  set bubble(array) {
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
    //this._bubble = array;
  }
  get bibble() {
    return this._bubble;
  }
  set bidirectional(array) {
    for (var p = 0; p < max; p++) {
      for (var i = 0; i < max; i++) {
        if (array[i] > array[i + 1]) {
          var tem = array[i];
          array[i] = array[i + 1];
          array[i + 1] = tem;
        }
      }
      for (var i = i; i > max; i--) {
        if (array[i] < array[i - 1]) {
          var tem = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tem;
        }
      }
    }
    console.log(array);
  }
  get bidirectional() {
    return this._bidirectional;
  }
  set insertion(array) {
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
  get insertion() {
    return this._insertion;

  }
  set Selection(array) {
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
  get selection() {
    return this._selaction;
  }
}
numbers = [];
var method = new methods;
method.array = numbers;
method.maxi = max;
while (op !== 0) {
  var op = Number(prompt("Menu:\n 1. Fill arrangement\n 2. Search element by sequential search method\n 3. Apply bubble sorting method\n 4.Apply bidirectional bubble sorting method\n 5. Apply insertion sort method\n 6. Apply mixing method\n 7. Apply sort order by selection\n 8. Print arrangement\n 0. Exit the program"));
  switch (op) {
    case 1:
      var max = Number(prompt("Enter the maximun of arrangement"));
      for (var i = 0; i < max; i++) {
        numbers[i] = Math.round((Math.random()) * 100);
      }
      console.log("el array es:" + method.array + "\n");
      break;
    case 2:
      method.sequential = method.array;
      method.sequential;
      console.log("the number " + method.sequential + " fue encontrado en la possition ");
      break;
    case 3:
      method.bubble = method.array;
      method.bubble;
      //console.log(method.bubble);
      break;
    case 4:
      method.bidirectional = method.array;
      method.bidirectional;
      break;
    case 5:
      method.insertion = method.array;
      method.insertion;
      break;
    case 6:
      break;
    case 7:
      method.Selection = method.array;
      method.Selection;
      break;
    case 8:
      //Print(orderSeque, orderBub, orderBidi, orderInser, orderSele);
      break;
    case 0 :
      op = 0;
      break;
  }
}