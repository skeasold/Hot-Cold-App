//Hot or Cold Application

function startHotCold () {
  randomNumberGenerator()
}
function randomNumberGenerator () {
  randomNumber = Math.floor((Math.random() * 100) + 1);
  guessNumber();
}
function guessNumber () {
  guess = undefined;
  guessCount = 0;
  guesses = [];
  check();
}
function check () {
  if (guess === undefined) {
    console.log("Guess A Number." +
     " To view your previous guesses type 'guesses'." +
     " To guess type guess = # then check ()."
    );
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
    guessCount ++;
    guesses.push (guess);
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
    console.log("Call the fire department, you are on fire! You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 10) {
    console.log("Pretty hot, can you feel your skin tingling? You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 25) {
    console.log("Getting warmer, put still have a couple guesses to go. You have guessed " + guessCount + " times.");
  }
  else if (guess < randomNumber + 50) {
    console.log("Okay, you can take your jacket off but you are still a ways away. You have guessed " + guessCount + " times.");
  }
  else {
    console.log("Better find a jacket, you might get frostbite. You have guessed " + guessCount + " times.");
  }
}
function isUnderGuess () {
  if (guess > randomNumber - 5) {
    console.log("Call the fire department, you are on fire! You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 10) {
    console.log("Pretty hot, can you feel your skin tingling? You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 25) {
    console.log("Getting warmer, put still have a couple guesses to go. You have guessed " + guessCount + " times.");
  }
  else if (guess > randomNumber - 50) {
    console.log("Okay, you can take your jacket off but you are still a ways away. You have guessed " + guessCount + " times.");
  }
  else {
    console.log("Better find a jacket, you might get frostbite. You have guessed " + guessCount + " times.");
  }
}
function isGuess () {
  console.log ("You got it! You took " + guessCount + " guesses.");
  startHotCold();
}
