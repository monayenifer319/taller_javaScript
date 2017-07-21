var num = Number(prompt("enter a number"));
var tell = 0, i;
for(i = 0; i <= num; i++){
    if(num % i === 0){
        tell ++;
    }
  }
    if(tell <= 2){
        console.log("The number is prime");
    }else{
        console.log("the number is not prime ");
    }


