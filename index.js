var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var imgP1 = "images/dice" + randomNumber1 + ".png"; // concatenate the link
var diceP1 = document.querySelector(".img1").src = imgP1; // change SRC attribute
// console.log(diceP1); // debug it
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgP2 = "images/dice" + randomNumber2 + ".png";
var diceP2 = document.querySelector(".img2").src = imgP2;
// console.log(diceP2);
var header;

// changing h1 by SWITCH
// switch (a = randomNumber1 - randomNumber2) {
//   case (>0):
//     header = "P1 wins it all";
//     break;

//   case (<0):
//     header = "P2 wins it all";
//     break;

//   default:
//     header = "Draw";
//     break;
// }
// console.log(a);

// changing h1 by IF
if (randomNumber1 > randomNumber2) header = "Make it!";
else if (randomNumber1 < randomNumber2) header = "Bad idea.";
else header = "Not shure, refresh me..";
document.querySelector("h1").textContent = header;

