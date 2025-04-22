// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess the number
let userGuess = parseInt(prompt("Guess a number between 1 and 5"));

// Check if the guess is correct
if (userGuess === randomNumber) {
  alert("You guessed right!");
} else {
  alert("Wrong guess. The number was " + randomNumber);
}
