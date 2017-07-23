var numbers = [10];
numbers = Number(prompt("Enter 10 numbers"));
for(i=0; i < 11; i++){
    if(numbers[i] / 2 === 0){
        console.log("Even numbers are: "+ numbers[i]);
    }
}