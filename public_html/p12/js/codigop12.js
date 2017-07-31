var aste = "*";
var tell = "     *";
var i = 1;
while(i<=5){
    if(tell==="     *"){
        console.log(tell);
    }
    console.log(tell=tell.slice(1)+aste);
    i++;
}
