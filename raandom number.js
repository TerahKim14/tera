// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess
let userGuess = prompt("Guess a number between 1 and 5");
userGuess = Number(userGuess);

// Check the guess and show the result
if (userGuess === randomNumber) {
  alert("You guessed right!");
} else {
  alert("Wrong guess. The number was " + randomNumber + ".");
}