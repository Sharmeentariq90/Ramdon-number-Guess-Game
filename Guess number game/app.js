// ****************Guess a number**********************
let num=Math.round(Math.random()*10);
let guess=+prompt("Enter a number");
if(num===guess){
    alert("Congratzzz u win , The num is :" + num);
}
else if(num  +  1  ===guess||num-1===guess){
    alert("You r closed , The num is :"+ num)

}
else{
    alert("Sorry!Try Again , The num is : "+ num);
}