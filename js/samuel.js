
/* Start

// VARIABLE, ALERT, CONSOLE.LOG
var myName = "niyi";
console.log(myName.length)
var dogAge = prompt("what is your dog age");
humanAge = ((dogAge - 2) * 4) + 21
console.log("your age is " + humanAge);


// LENGTH
var tweet = prompt("type your tweet here"); // i had to comment the prompt
var tweetCount = tweet.length;
console.log("you have written " + tweet.length + " characters, you have " + (200 - tweet.length) + " characters left");

// SLICE PROGRAMMERS ALWAYS COUNT FROM ZERO
var school = "obafemi";
console.log(school.slice(0,2));

tweet.slice(0,5);

// coding exercise
function lifeInAge (age){
    var lifeRemaining = (90 - age);
    var ageInWeeks = lifeRemaining * 52;
    var ageInDays = lifeRemaining * 365;
    console.log("you have " + ageInWeeks + " weeks, " + ageInDays + " days left");
}
lifeInAge(30);

 console.log(prompt("type your tweet here").slice(0,5));

var yourName = prompt("what is your name");
var firstLetter = yourName.slice(0, 1);
var upper = firstLetter.toUpperCase()
var lower = yourName.slice(1, length.yourName);
lower.toLowerCase()
alert("Hello " + upper + lower);

// FUNCTIONS, FLOOR, CALLING FUNCTION,RETURN

function getMilk(money, costPerBottle){
    var numberOfBottles = Math.floor(money/costPerBottle)
    console.log("Hello boss, I bought " + calcNoBottles(money, costPerBottle) + " bottles of milk.");
    return calChange(money, costPerBottle); 
}

function calcNoBottles (startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}

function calChange(startingMoney, costPerBottle){
    var change = startingMoney % costPerBottle // modulus gives the remainder of number
    return change;
}

console.log("here is your " + "$" + getMilk(5, 4) + " change" );

// CHALLENGE -- BMI CALCULATOR

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.




// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number.



function bmiCalculator(weight, height){
    var bmi = weight / (height * height);
    return Math.round(bmi);
}
console.log(bmiCalculator(65, 1.8));

// LOVE CALCULATOR
prompt("type your partners' name");
prompt("type your name");

let loveCal = Math.random() * 100;
 loveCal = Math.floor(loveCal) + 1
 console.log("your love is " + loveCal + "%");
alert("your love is " + loveCal + "%")

// die rolling game
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
const roll = `you rolled a ${die1} and a ${die2} and they sum up to ${die1 + die2}`

const word = 'skateboard'
const facialHair = word.slice(5).replace('o', 'e');
console.log(facialHair); 

End*/

// index number
let animal = 'chicken';
console.log(animal[3]);
console.log(animal.toUpperCase());
console.log(1 < 3);

// if statment
const num = 290;
function isEven(num){
   if (num % 2 === 0){
   console.log("even")}
}
isEven(num);

const phrase = 'slow';
function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   if (phrase === 'stop'){
       console.log('red');
   } else if(phrase === 'slow'){
       console.log('yellow');
   } else if(phrase === 'go'){
       console.log('green');
   } else {
       console.log('purple');
   }
 
   
   
    //AND THIS LINE ↑↑↑↑↑
}

/*// Nesting
// Change the value of num, so that "YOU GOT ME!" prints out
let num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
} */


    const mystery = ''; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}
function bmiCalculator (weight, height) {
    let bmi = (weight / (height * height));
    bmi = Math.floor(bmi * 100) / 100;
    if (bmi < 18.5){
        return(`Your BMI is ${bmi}, so you are underweight.`);
    } else if (bmi >= 18.8 && bmi <= 24.9){
        return(`Your BMI is ${bmi}, so you have a normal weight.`);
    } else if (bmi > 24.9){
        return(`Your BMI is ${bmi}, so you overweight.`);
    }
    }
   console.log(bmiCalculator (100, 1.8));

//    Leap year Challenge - this was done by nesting if under if

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 'Leap year.';
            }else {
                return 'Not a leap year.';
            }
        } else {
            return 'Leap year.';
            }
        }else {
            return 'Not a leap year.';}
    /**************Don't change the code below****************/    
    }
    console.log(isLeap(1998));

    // fizzbuzz game

let output = [];
let count = 1;
function fizzbuzz(){
    if (count % 3 === 0 && count % 5 === 0){
         output.push('fizzbuzz');
    } else if (count % 3 === 0){
         output.push('fizz');
    }else if (count % 5 === 0){
         output.push('buzz');
    } else { output.push(count)};
    count++;
        console.log(output);
}

// push,pop, shift,unshift
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; 
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

// Nexted Arrays, splice
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

const availSeat = airplaneSeats[3];
console.log(availSeat.splice(1,1, 'Hugo'));
console.log(availSeat);

// who is buying lunch game
function whosPaying(names) {
    let friendList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    let chosenPayer = Math.floor(Math.random() * friendList.length);
    return `${friendList[chosenPayer]} is going to buy lunch today!`;
    }

//    While Loop on Fizzbuzz game, note count has already been decleared
function fizzbuzz(){
    while(count <= 100) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push('fizzbuzz');
       } else if (count % 3 === 0){
            output.push('fizz');
       }else if (count % 5 === 0){
            output.push('buzz');
       } else { output.push(count)};
       count++;
    }
        console.log(output);
}

// 99 bottles challenge using while loop
function bear(){
    let myCount = 99;
    while(myCount >= 1 && myCount <= 99){
        myCount--;
    console.log(`${myCount} bottles of bear on the wall, ${myCount} bottles of bear
take one down and pass it round, ${(myCount) - 1} bottles of bear on the wall`);}
    }

    // Another way to solve the 99 bottle challenge
    function bearGame(){
        let numBottles = 99;
        while(numBottles <= 99 && numBottles >= 0){
            if(numBottles === 99){
                console.log(`${numBottles} bottles of bear on the wall, ${numBottles} bottles of bear
take one down and pass it round, ${numBottles - 1} bottles of bear on the wall`)
            } else if (numBottles < 99 && numBottles > 1){
                console.log(`${numBottles} bottles of bear on the wall, ${numBottles} bottles of bear
take one down and pass it round, ${numBottles - 1} bottles of bear on the wall`)
            } else if (numBottles === 1){
                console.log(`${numBottles} bottles of bear on the wall, ${numBottles} bottles of bear
take one down and pass it round, no bottles of bear on the wall`)
            } else if (numBottles === 0){
                console.log(`no more bottles of bear on the wall, no more bottles of bear on the wall
Go to the store and buy some more, 99 bottles of bear on the wall`)
            }
            numBottles--
        }
    }

