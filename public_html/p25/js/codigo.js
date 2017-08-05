//var numbers = [];
var numbers = new Array(10);
var prime = [];
var pair = [];
var sumprime = 0;
var sumpair = 0;
var Pprime = 0;
var Ppair = 0;
var tellprimed = 0;
var tellprime = 0;
var tellpair = 0;
// llenar el arreglo
for (i = 0; i < 6; i++) {
  numbers[i] = Number(prompt("Enter ten numbers:"));
  //console.log(numbers[i]);

}
console.log("even numbers are:");
i = 0;
while (i <= 9) {
  if ((numbers[i] % 2) === 0) {
    pair[tellpair] = numbers[i];
    console.log(pair[tellpair]);
    sumpair = sumpair + pair[tellpair];
    tellpair++;
    Ppair = sumpair / tellpair;
  }
  i++;
}
console.log("primes numbers are:");
var i = 0;
do {
  for (var x = 1; x <= numbers[i]; x++) {
    if (numbers[i] % x === 0) {
      tellprimed++;
    }
    if (x === numbers[i] && tellprimed === 0) {
      tellprimed = 5;
    }
  }
  if (tellprimed <= 2) {
    prime[tellprime] = numbers[i];
    console.log(prime[tellprime]);
    sumprime = sumprime + prime[tellprime];

    tellprime++;
    Pprime = sumprime / tellprime;
  }
  tellprimed = 0;
  i++;
} while (i <= 5);
console.log("the sum of numbers pairs is: " + sumpair);
console.log("the sum of numbers primes is: " + sumprime);
console.log("the promedy of numbers primes is: " + Pprime);
console.log("the promedy of numbers pair is: " + Ppair);
