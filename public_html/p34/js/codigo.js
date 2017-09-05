numbers = [];
primes = [];
pair = [];
class array {
  constructor(numbers) {
    this._numbers = Number(numbers);
  }
  setnumbers(numers) {
    this._numbers = numbers;
  }
  getnumbers(numbers) {
    return this._numbers;
  }

  numPair() {
    tellpair = 0;
    i = 0;
    while (i <= 9) {
      if ((numbers[i] % 2) === 0) {
        pair[tellpair] = numbers[i];
        sumpair = sumpair + pair[tellpair];
        tellpair++;
        Ppair = sumpair / tellpair;
      }
      i++;
    }
    return this
  }
}

for (i = 0; i < 10; i++) {
  numbers[i] = prompt("Enter ten numbers:");
  //console.log(numbers[i]);
}
console.log("even numbers are:");
console.log(pair[tellpair]);