
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// If Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//If Player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
//If there's a tie
else {
  document.querySelector("h1").innerHTML = "Draw!";
}







/************** Altenate Code *************/
/*
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2);

var imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png",
"images/dice5.png","images/dice6.png"];

var imageArray2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png",
"images/dice5.png","images/dice6.png"];

var randomImage2 = imageArray2[randomNumber2];

var randomImage = imageArray[randomNumber1];

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if (randomImage === randomImage2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomImage > randomImage2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomImage < randomImage2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
*/
