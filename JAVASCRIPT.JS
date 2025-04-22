// Ask the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number type
number = parseInt(number);

// Check if the number is even or odd using %
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
