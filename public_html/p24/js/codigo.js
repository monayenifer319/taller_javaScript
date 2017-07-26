var hours = Number(prompt("Enter the number of hours"));
//  un dia es igual a 24 horas
var day = 24;
// una semana es igual a 168 horas
var week = 168;
    if((hours >= day) && (hours < week)){
       var answer = hours / day;
       var answerWe = hours/week;
        console.log("The hours entered belong to: "+answer+ " day ");
        console.log("Infested hours belong to less than one weeks: "+answerWe);
    }else{
        var answer = hours / day;
            var answerWe = hours/week;
            console.log("The hours entered belong to: "+answer+ " day ");
            console.log("The hours entered belong to weeks: "+answerWe);
    }
    