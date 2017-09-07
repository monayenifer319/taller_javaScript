//var hola = prompt("olaaa");
class array {
  constructor() {
    this._array;
    this._primes;// = [];
    this._pair; //= [];
    this._sumPair;
    //this.numbers = Number(numbers);
  }
  set array(array) {
    this._array = array;
  }
  get array() {
    return this._array;
  }
  set pair(array) {
    this._pair = this._array.filter((elemen) => {
      return elemen % 2 === 0;
    });
  }
  get pair() {
    return this._pair;
  }
  set sumPair(pair) {
    for (var i = 0; i < this._pair.length; i++) {
      this.sumPair = this.sumPair + this, _pair[i];
    }
  }
  get sumPair() {
    return this._sumPair;
  }
}
var size = Number(prompt("What size do you want the arrangement"));
var numbers = [];
for (i = 0; i < size; i++) {
  numbers[i] = prompt("Enter ten numbers:");
  //console.log(numbers[i]);
}
var arrangement = new array();
arrangement.array = numbers;
console.log("the arrangement is:");
console.log(arrangement.array);

arrangement.pair = arrangement.array;
console.log("even numbers are:");
console.log(arrangement.pair);

arrangement.sumPair = arrangement.pair;


