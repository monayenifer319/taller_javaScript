//while(option =! 0){
 console.log("Select an option");
 console.log("1. To make a sum"); 
 console.log("2. make a subtraction");
 console.log("3. Make a subtraction");
 console.log("4. Make a division");
 console.log("0. exit the program"); 
 
    
    switch(option){
        case 1:
          var num1 = prompt("enter a number");
          var num2 = prompt("Enter another number");
          var sum = num1 + num2;
          console.log("the sum is: "+sum);
        break;
        case 2:
          var num1 = prompt("enter a number");
          var num2 = prompt("Enter another number");
          var sub = num1 - num2;
          console.log("the subtraction is: "+sub);
        break;
        case 3:
          var num1 = prompt("enter a number");
          var num2 = prompt("Enter another number");
          var multip = num1 * num2;
          console.log("the is: "+multip);
        break;
        case 4:
          var num1 = prompt("enter a number");
          var num2 = prompt("Enter another number");
          var div = num1 / num2;
          console.log("the is: "+div);
          break;
    }
//}