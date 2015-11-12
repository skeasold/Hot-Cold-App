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
  if (guess < randomNumber + 5) {
    console.log("Call the fire department, you are on fire!");
  }
  else if (guess < randomNumber + 10) {
    console.log("Pretty hot, can you feel your skin tingling?");
  }
  else if (guess < randomNumber + 25) {
    console.log("Getting warmer, put still have a couple guesses to go.");
  }
  else if (guess < randomNumber + 50) {
    console.log("Okay, you can take your jacket off but you are still a ways away.");
  }
  else {
    console.log("Better find a jacket, you might get frostbite.");
  }
}
function isUnderGuess () {
  if (guess > randomNumber - 5) {
    console.log("Call the fire department, you are on fire!");
  }
  else if (guess > randomNumber - 10) {
    console.log("Pretty hot, can you feel your skin tingling?");
  }
  else if (guess > randomNumber - 25) {
    console.log("Getting warmer, put still have a couple guesses to go.");
  }
  else if (guess > randomNumber - 50) {
    console.log("Okay, you can take your jacket off but you are still a ways away.");
  }
  else {
    console.log("Better find a jacket, you might get frostbite.");
  }
}
function isGuess () {
  console.log ("You got it!")
}
function guessCounter () {
  //NOT COMPLETED!
}
