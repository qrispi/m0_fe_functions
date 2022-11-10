// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion()

// This one looks good.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum)
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Removed curly bracket indentations on line 23.
// Indented function arguments on lines 21 and 22.
// Removed semi-colon on line 22.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper")
  console.log("Pulse basil and pine nuts")
  console.log("Add garlic and cheeses")
  console.log("Slowly pour in oil")
  console.log("Season")   
}

makeFreshPesto()

// Corrected spelling of function on line 33.
// Added space between function parameters and curly bracket on line 33.
// Removed all semi-colons on line ends.
// Brought curly bracket from line 38 down to line 39.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2
  var avg = sum / 2
  console.log(`The average is: ${avg}.`)
}

average(5, 10)

  // Brought curly bracket from line 50 up to line 49.
  // Removed space before curly bracket on line 54.
  // Removed semi-colons on line extends.
  // Indented line 50.
  // Removed empty line 52.
  // Removed one indent on line 51.
  // Placed period inside backticks on line 52.
  // Added function call command.
  // Capitalized 'the' on line 52.
