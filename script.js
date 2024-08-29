// Task 1: Create a variable called "carName", assign the value "Volvo" to it.
//Answer: 

let carName = "Volvo"
console.log(carName)

// Task 1 of 2: On one single line, declare three variables with the following names and values.
//Answer:
firstName = "John" , lastName = "Doe" , age = "35"

//task 2 of 2: So What Will Be The 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both! 
 
let firstName = "John"
let lastName = "Doe"
let age = "35"

//Task 3: Use the correct assignment operator that will result in x being 50 (same as x = x * y). 
//Answer: The assignment operator same as x = x * y is (*=)

x = 5
y = 10

x *= y

console.log(x)

//Task 4: Use comments to describe the correct data type of the following variables.
//Answer:

let length = 16; // data type - Number 
let lastName = "Johnson"; // data type - String 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type - object 

// Task 5: Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
  }
  
  // call the function and see the output

  // We can call the function by it's name 

  myFunction()

  //Task 6 : I couldn't understand the question

  //Task 7: Don't know how to do it

  // Task 1 of 8: 1. Alert the number of items in an array, using the correct Array property.

  const cars = ["Volvo", "Jeep", "Mercedes"];
  alert(cars.length);

  //Task 2 of 8: Change the first item of Brand to "Ford".

  const Brand = ["Volvo", "Jeep", "Mercedes"];
  Brand[0] = "Ford";

  //Task 2 of 9:Use the correct Math method to return the largest number of 10 and 20.

  const maxNumber = Math.max(10, 20);
  console.log(maxNumber);

  //Task 3 of 9: Use the correct Math method to get the square root of 9.
    const number = 9;
    const squareRoot = Math.sqrt(number);
    console.log(squareRoot);

  // Task 1 of 10: Choose the correct comparison operator to alert true, when x is greater than y.

  let x = 10;
  let y = 5;

  alert(x > y);

  //Task 2 of 10:  Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

  let age = 17

  alert(age < 18 ? "Too young" : "Old enough");

