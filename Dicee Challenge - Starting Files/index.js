
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImage1 = `images/dice${randomNumber1}.png`
var newDice1 = document.querySelectorAll("img")[0];
newDice1.setAttribute("src", randomImage1);

var randomImage2 = `images/dice${randomNumber2}.png`
var newDice2 = document.querySelectorAll("img")[1];
newDice2.setAttribute("src", randomImage2);



