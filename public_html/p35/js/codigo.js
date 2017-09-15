class campany {
  constructor() {
    this._setAdd;
    this._searchCode;
    this._searchName;
    this._array;
    this._name;
    this._code;
  }
  setAdd() {
    this._array = JSON.parse(localStorage.getItem('array35'));
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
      if (this._array === null) {
        this._array = new Array();
        this._array.push(products);
        localStorage.setItem('array35', JSON.stringify(this._array));
      } else {
        this._array.push(products);
        localStorage.setItem('array35', JSON.stringify(this._array));

      }
      let tmp = confirm('want to add another product?');
      if (tmp) {
        var tell = 0;
      } else {
        tell = 1;
      }
    } while (tell === 0);
  }
  getAdd() {
    return this._array;
  }
  set searchName(array) {
    this._array = JSON.parse(localStorage.getItem("array35"));
    var search = prompt("Enter the name of the product you want to search");
    for (var i = 0; i < this._array.length; i++) {
      if (search === this._array[i].name) {
        //var info = " ";
        for (var p in this._array[i]) {
          this._name += this._array[i][p] + " ";
          //this._name = info;
        }
        //this._name = info;
      } else if (search !== this._array[i].name) {
        console.log("The product was not found");
      }
    }
  }
  get searchName() {
    return this._name;
  }
  set searchCode(array) {
    this._array = JSON.parse(localStorage.getItem("array35"));
    var search = prompt("Enter the code of the product you want to search");
    for (var i = 0; i < this._array.length; i++) {
      if (search === this._array[i].code) {
        for (var p in this._array[i]) {
          this._code += this._array[i][p] + " ";
        }
      } else if (search !== this._array[i].code) {
        console.log("The product was not found");
      }
    }
  }
  get searchCode() {
    return this._code;
  }
}

var decorations = new campany;
do {
  var op = Number(prompt("selecct an option\n 1. add product\n 2. Find product by name\n 3. Find product by code"));
  switch (op) {
    case 1:
      decorations.setAdd();
      break;
    case 2:
      decorations.searchName = decorations.array;
      //decorations.searchName = decorations.info;
      //decorations.info = decorations.searchName;
      //var infor = decorations.searchName;
      console.log("The product was found" + decorations._name);
//      console.log(decorations.array);
      break;
    case 3:
      decorations.searchCode = decorations.array;
      var inform = decorations.searchCode;
      console.log("The product was found: " + inform);
      break;
    case 0:
      op = 0;
      break;

  }
} while (op !== 0);