do{
    var num1 = Number(prompt("enter a number"));
    var num2 = Number(prompt("Enter another number"));
    var op = prompt("menu: 1. To make a sum, 2.make a subtraction, 3.Make a subtraction, 0.exit the program, 4. Make a division");
    var answer = 0;
    if(op == 1){
       answer = num1 + num2; 
       console.log("the sum is: "+answer);
    }else if(op ==2){
        answer = num1-num2;
        console.log("the diferencia is: "+answer);
    }else if(op ==3){
            answer = num1*num2;
            console.log("the multiplication is: "+answer);
    }else if(op == 4){
            answer = num1/num2;
            console.log("the multiplication is: "+answer);
    }
}while(op !=0);