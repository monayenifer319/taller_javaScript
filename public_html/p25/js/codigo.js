//var numbers = [];
var numbers = new Array(10);
for (i=0; i <3; i++){ 
        numbers[i] = Number(prompt("Enter 10 numbers"));
        if(numbers[i] % 2 === 0){
            console.log("Even numbers are: "+ numbers[i]);
        //if(nums % i === 0){
        }else{
             console.log("Prime numbers are");
        }       
       	//console.log("number " + numbers[i] + " en la Posición " + i );          
}