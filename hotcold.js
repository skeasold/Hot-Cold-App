
var guess = undefined;
var randomNumber = Math.floor((Math.random() * 100) + 1);

function submit(){
  if(guess === randomNumber){
      return 'you got it'
  }
  else  if(guess === undefined){
      console.log('Guess a number');
  }
  else{
      console.log('nope...guess again');
  }
}
