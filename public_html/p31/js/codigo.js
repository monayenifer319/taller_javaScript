class array {
  constructor() {
    this._array;
    this._primes;
    this._pair;
    this._sumPair;
    this._averagePair;
    this._sumPrime;
    this._averagePrime;
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
    var tell = 0;
    this._pair.forEach((e) => {
      tell = tell + e;
    });
    this._sumPair = tell;
  }
  get sumPair() {
    return this._sumPair;
  }
  set averagePair(sumPair) {
    this._averagePair = this._sumPair / this._pair.length;
  }
  get averagePair() {

    return this._averagePair;
  }
  set primes(array) {

    for (var i = 0; i < this._array.length; i++) {
      var tell = 0;
      for (var j = 0; i <= this._array[i]; j++) {
        if (this._array[i] % j === 0) {
          tell++;
        }
      }
      if (tell <= 2) {
        this._primes.push(this._array[i]);
      }
    }
  }
  get primes() {
    return this._primes;
  }
  set sumPrime(prime) {
    for (var i = 0; i < this._prime.length; i++) {
      this._sumPime = prime[i] + this._sumPrime;
    }
  }
  get sumPrime() {
    return this._sumPrime;
  }
  set averagePrime() {
    this._averagePrime = this._sumPrime / this._prime.length;
  }
  get averagePrime() {
    return this._averagePrime;
  }
}
var size = Number(prompt("What size do you want the arrangement"));
var numbers = [];
for (i = 0; i < size; i++) {
  numbers[i] = Number(prompt("Enter ten numbers:"));
}
var arrangement = new array();
arrangement.array = numbers;
console.log("the arrangement is:");
console.log(arrangement.array);

arrangement.pair = arrangement.array;
console.log("even numbers are:");
console.log(arrangement.pair);

arrangement.sumPair = arrangement.pair;
console.log("the sum pair is: ");
console.log(arrangement.sumPair);

arrangement.averagePair = arrangement.sumPair;
console.log("the average the of pair is: ");
console.log(arrangement.averagePair);

arrangement.prime = arrangement.array;
console.log("the primes is: ");
console.log(arrangement.prime);

arrangement.sumPrime = arrangement.prime;
console.log("the sum the of primes is: ");
console.log(arrangement.sumPrime);

arrangement.averagePrime = arrangement.sumPrime;
console.log("the average average the of primes is: ");
console.log(arrangement.averagePrime);