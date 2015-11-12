//Hot or Cold Application

function startHotCold () { //COMPLETE
  randomNumberGenerator()
}
function randomNumberGenerator () { //COMPLETE
  randomNumber = Math.floor((Math.random() * 100) + 1);
  guessNumber();
}
function guessNumber () { //COMPLETE
  guess = undefined;
  check();
}
function check () { //COMPLETE
  if (guess === undefined) {
    console.log("Guess A Number.");
  }
  else if (isNaN (guess) === true) {
    console.log("That is not a number. Please try again.");
  }
  else if (guess > 100) {
    console.log("That number is over 100. Please try again.");
  }
  else if (guess < 0) {
    console.log("That number is below 0. Please try again");
  }
  else {
    if (guess === randomNumber) {
      isGuess();
    }
    else if (guess > randomNumber) {
      isOverGuess();
    }
    else if (guess < randomNumber) {
      isUnderGuess();
    }
  }
}
function isOverGuess () {
  console.log("You are over, guess again.");
}
function isUnderGuess () {
  console.log ("You are under, guess again.");
}
function isGuess () {
  console.log ("You got it!")
}
function guessCounter () {
  //NOT COMPLETED!
}
