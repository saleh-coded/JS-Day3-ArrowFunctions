// TASK 1
// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) =>{
    return `Hello, ${name}!`;
};

console.log(greet("Saleh"))


// TASK 2
// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (a, b) => {
    return a + b; 
};

console.log(sum(5, 3));  // Output: 8


// Task 3
// Q3) Write a simple arrow function that squares a number.

const square = (num) => {
    return num * num;
};

console.log(square(4));


// Challenge 
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numberhpj = [1, 2, 3, 4, 5];

const resulttttt= numberhpj.map( (num)=>{
    return num * num;   
});

console.log(resulttttt);
