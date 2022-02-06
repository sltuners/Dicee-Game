var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imgP1 = "images/dice" + randomNumber1 + ".png";
var diceP1 = (document.querySelector(".img1").src = imgP1);
console.log(diceP1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgP2 = "images/dice" + randomNumber2 + ".png";
var diceP2 = (document.querySelector(".img2").src = imgP2);
console.log(diceP2);
var header;

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

if (randomNumber1 > randomNumber2) header = "P1 wins it all";
else if (randomNumber1 < randomNumber2) header = "P2 wins it all";
else header = "Draw";
document.querySelector("h1").textContent = header;
console.log(header);
