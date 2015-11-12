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
  guessCount = 0
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
    guessCount ++
    console.log("Call the fire department, you are on fire! You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 10) {
    guessCount ++
    console.log("Pretty hot, can you feel your skin tingling? You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 25) {
    guessCount ++
    console.log("Getting warmer, put still have a couple guesses to go. You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 50) {
    guessCount ++
    console.log("Okay, you can take your jacket off but you are still a ways away. You have guessed " + guessCount + " times.");
  }
  else {
    guessCount ++
    console.log("Better find a jacket, you might get frostbite. You have guessed " + guessCount + " times.");
  }
}
function isUnderGuess () {
  if (guess > randomNumber - 5) {
    guessCount ++
    console.log("Call the fire department, you are on fire! You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 10) {
    guessCount ++
    console.log("Pretty hot, can you feel your skin tingling? You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 25) {
    guessCount ++
    console.log("Getting warmer, put still have a couple guesses to go. You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 50) {
    guessCount ++
    console.log("Okay, you can take your jacket off but you are still a ways away. You have guessed " + guessCount + " times.");
  }
  else {
    guessCount ++
    console.log("Better find a jacket, you might get frostbite. You have guessed " + guessCount + " times.");
  }
}
function isGuess () {
  guessCount ++
  console.log ("You got it! You took " + guessCount + " guesses.")
}
