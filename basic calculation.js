// Ask for the first number
let num1 = parseFloat(prompt("Enter first number"));

// Ask for the operator
let operator = prompt("Enter operator (+, -, *, /)");

// Ask for the second number
let num2 = parseFloat(prompt("Enter second number"));

let result;

// Perform calculation based on the operator
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Error: Cannot divide by zero.";
  }
} else {
  result = "Invalid operator.";
}

// Show the result
alert("Result: " + result);
