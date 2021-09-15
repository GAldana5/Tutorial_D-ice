var randomNumber1;
randomNumber1 = parseInt(Math.random() * 5 + 1);
randomNumber2 = parseInt(Math.random() * 5 + 1);

//Dice 1
var Dice1 = "images/dice"+randomNumber1+".png";
document.getElementById("img1").src=Dice1;

//Dice 2
var Dice2 = "images/dice"+randomNumber2+".png";
document.getElementById("img2").src=Dice2;

//Win status
if (randomNumber1 > randomNumber2){
    document.getElementById("status").innerHTML = "Dice 1 wins!!";
}
else if (randomNumber1 < randomNumber2){
    document.getElementById("status").innerHTML = "Dice 2 wins!!";
}
else if (randomNumber1 === randomNumber2){
    document.getElementById("status").innerHTML = "It's a tie!!";
}


// using ifs
// if (randomNumber1 === 1){
//     document.getElementById("img1").src="dice1.png";
// }
// else if (randomNumber1 === 2){
//     document.getElementById("img1").src="dice2.png";
// }
// else if (randomNumber1 === 3){
//     document.getElementById("img1").src="dice3.png";
// }
// else if (randomNumber1 === 4){
//     document.getElementById("img1").src="dice4.png";
// }
// else if (randomNumber1 === 5){
//     document.getElementById("img1").src="dice5.png";
// }
// else if (randomNumber1 === 6){
//     document.getElementById("img1").src="dice6.png";
// }